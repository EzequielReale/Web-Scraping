# Web-Scraping Backend API

El backend del portal de Web Scraping es una API REST empresarial construida con **LoopBack 4** y **TypeScript**. Incorpora un motor de ejecución en segundo plano para el rastreo y raspado de sitios web gestionado por un sistema de tareas cron adaptativas.

---

## 🛠️ Tecnologías y Librerías Utilizadas

- **LoopBack 4**: Framework central para el diseño y exposición de la API REST y el manejo de inyección de dependencias.
- **MongoDB Connector**: Integrado mediante `loopback-connector-mongodb` para conectarse tanto a instancias locales como a clústeres de MongoDB Atlas.
- **Cheerio**: Utilizado para parsear el árbol DOM HTML y realizar la selección de nodos y extracción de contenido mediante sintaxis estilo jQuery.
- **Node-Fetch**: Cliente HTTP para descargar el HTML de las páginas rastreadas.
- **@loopback/cron**: Integración nativa del planificador de tareas cron dentro del ciclo de vida del servidor LoopBack.
- **dotenv**: Carga segura de variables de entorno como credenciales de base de datos e identificadores de clientes.

---

## ⚙️ Configuración y Variables de Entorno

El servidor backend utiliza un archivo `.env` localizado en el directorio raíz del módulo (`/Backend/.env`). Asegúrate de configurarlo con las siguientes variables:

```env
MONGODB_URL=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/mongoAtlas?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=tu_google_client_id_para_verificar_tokens (Opcional, tiene un fallback por defecto)
```

### Origen de Datos (`datasources/mongo-atlas.datasource.ts`)
El datasource se inicializa de manera dinámica a partir del parámetro `process.env.MONGODB_URL`. Si necesitas correr la base de datos de manera local, puedes cambiar el valor a `mongodb://localhost:27017/nombre_db`.

---

## 🔒 Autenticación con Google JWT

La seguridad está implementada mediante una estrategia personalizada de LoopBack (`JWTAuthenticationStrategy`) registrada en `src/authentication-strategies/auth0.ts` (modificada para Google Sign-In) y `jwt-service.ts`:

1. **Estrategia**: Registrada bajo el nombre `auth0-jwt`.
2. **Proveedor de Claves Públicas (JWKS)**: Configurado en `src/application.ts` apuntando a las firmas oficiales de Google: `https://www.googleapis.com/oauth2/v3/certs`.
3. **Validación**: Verifica que las peticiones contengan una cabecera `Authorization: Bearer <ID_TOKEN>`. Valida la vigencia del token, la coincidencia del `audience` (Client ID) y que el emisor (`issuer`) pertenezca a Google (`accounts.google.com`).

---

## ⏰ Sistema de Monitoreo y Scraping (Cron & Workers)

La automatización reside dentro del directorio `src/utils/`:

### 1. Administrador de Sincronización (`MyCronJob.ts`)
- Corre una tarea cron centralizada **cada 10 segundos** (`job-sync-websites`).
- Consulta la base de datos para buscar sitios web activos registrados por los usuarios.
- **Ciclo de vida dinámico**:
  - **Creación**: Si encuentra un sitio nuevo, inicia un sub-trabajo cron dedicado con la frecuencia especificada en segundos (`website.frequency`).
  - **Actualización**: Si detecta cambios en la URL o la frecuencia del sitio, detiene el trabajo antiguo y crea uno nuevo en caliente con los nuevos parámetros.
  - **Eliminación**: Si se ha borrado un sitio, detiene su tarea cron respectiva y desencadena una eliminación en cascada de sus páginas extraídas y registros de error asociados.
- **Prevención de Solapamiento**: Mantiene una lista en memoria (`currentlyProcessing`) con los identificadores de sitios actualmente en proceso para omitir ticks si una tarea previa aún no ha concluido.

### 2. Motor de Rastreo (`cheerioHelper.ts`)
- **Control de Concurrencia**: Procesa la cola de URLs por sitio de forma asíncrona controlando el flujo para no exceder un máximo de **3 conexiones simultáneas** a la vez.
- **Respeto de Dominio**: El crawler extrae los enlaces (`<a href="...">`) del HTML obtenido pero solo encola aquellos que pertenezcan al dominio principal del sitio original para evitar fugas externas.
- **Límite de Páginas**: Detiene la ejecución una vez alcanzado el límite de seguridad de **200 páginas raspadas** por sitio.
- **Evaluación Dinámica (Sandbox)**: Ejecuta de forma segura el script de extracción definido por el usuario utilizando la función `eval(website.snippet)` en un contexto donde se inyecta la instancia cargada de `Cheerio` (`$`).
- **Persistencia Transaccional limpia**: Al finalizar con éxito, se eliminan los registros anteriores de páginas y errores de ese sitio específico en la base de datos para insertar en lote (Bulk Insert) el estado más reciente obtenido del rastreo.

---

## 🛠️ Comandos Disponibles

Ejecuta estos scripts desde el directorio `/Backend`:

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias y librerías declaradas en el proyecto. |
| `npm start` | Limpia compilaciones anteriores, compila TypeScript y levanta el servidor REST. |
| `npm run build` | Compila los archivos TypeScript (`.ts`) a JavaScript compilado (`.js`) en la carpeta `dist/`. |
| `npm run rebuild` | Realiza una limpieza completa y vuelve a compilar el proyecto TypeScript. |
| `npm run clean` | Elimina la carpeta `dist/` y los archivos temporales de compilación. |
| `npm run lint` / `lint:fix` | Ejecuta el análisis de estilo de código (ESLint y Prettier) y los corrige si es posible. |
| `npm run openapi-spec` | Genera el esquema de definición de OpenAPI en formato JSON. |
| `npm run docker:build` | Compila una imagen Docker local para el servicio llamada `searchservice`. |
| `npm run docker:run` | Corre la imagen Docker levantando la API en el puerto `3000`. |

---

## 🐳 Despliegue con Docker

El proyecto incluye un `Dockerfile` optimizado basado en `node:18-slim` para empaquetar la aplicación:
- Ejecuta las tareas bajo un usuario sin privilegios de root (`node`) por motivos de seguridad.
- Define las variables de red del contenedor en `HOST=0.0.0.0` y `PORT=3000`.
- Expone el puerto `3000`.

Para levantar el contenedor manualmente:
```sh
docker build -t scraping-backend .
docker run -p 3000:3000 --env-file .env scraping-backend
```
