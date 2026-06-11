# Web-Scraping Frontend Client

El frontend del portal de Web Scraping es una aplicación SPA (Single Page Application) moderna, reactiva y responsive construida con **Vue 3**, **Vite** y **Vuetify**. Sirve como interfaz administrativa para que los usuarios configuren sus tareas de scraping y visualicen los datos extraídos en tiempo real.

---

## 🛠️ Tecnologías y Librerías Utilizadas

- **Vue 3 (Composition API)**: Framework central de UI con reactividad óptima.
- **Vite**: Motor de empaquetado rápido que gestiona el desarrollo local y las variables de entorno.
- **Vuetify 3**: Framework de componentes de Material Design adaptado con paleta de colores personalizada de estética prémium.
- **Pinia**: Gestión global y centralizada de estados (usada para mantener la sesión del usuario).
- **Vue Router**: Sistema de enrutamiento dinámico que implementa guardias de acceso basadas en tokens.
- **OpenAPI Client Axios**: Integración de tipo seguro de la API mediante la especificación OpenAPI generada por el backend.

---

## ⚙️ Configuración y Variables de Entorno

Para ejecutar el frontend en tu máquina local, debes crear un archivo `.env` en la raíz de `/Frontend` con las siguientes claves:

```env
VITE_API_SERVER_URL=http://localhost:5173
VITE_GOOGLE_CLIENT_ID=tu_google_client_id_de_google_cloud_console.apps.googleusercontent.com
```

### Banner de Configuración
Si la variable `VITE_GOOGLE_CLIENT_ID` no se encuentra configurada en el archivo `.env`, la aplicación mostrará automáticamente un **Banner de Advertencia** interactivo con las instrucciones paso a paso para crear las credenciales correctas en la consola de Google Cloud.

---

## 🔑 Integración de Google Sign-In Nivel Cliente

El flujo de inicio de sesión nativo se implementa directamente en `src/App.vue`:

1. **Inicialización**: Una vez montado el componente principal, la librería oficial Google 3P se inicializa vinculando el ID de cliente de la variable de entorno.
2. **Callback (`handleCredentialResponse`)**: Cuando el usuario selecciona su cuenta de Google, se recibe un token JWT.
3. **Decodificación**: El token es decodificado en local (usando base64) para extraer la información básica (nombre, correo electrónico, imagen de perfil).
4. **Persistencia**: Se guardan el token y los datos del perfil tanto en el almacén de Pinia (`useAuthStore`) como en el almacenamiento persistente de `localStorage` para recordar la sesión al recargar la página.
5. **Configuración de Cabecera**: El cliente Axios inyecta automáticamente el token de Google en cada petición subsiguiente mediante la propiedad de cabecera:
   ```javascript
   client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   ```

---

## 🔌 Cliente de API OpenAPI (`src/types/`)

La comunicación con el backend está tipada y auto-generada:
- **`openapi.d.ts`**: Archivo de tipos TypeScript auto-generado que describe las rutas, parámetros y esquemas que el backend expone.
- **`ClientAPI.ts`**: Inicializa `OpenAPIClientAxios` apuntando al endpoint de metadatos OpenAPI del servidor (`http://localhost:3000/openapi.json`), exportando una instancia de Axios tipada (`client`) para invocar controladores directamente en formato JS.
  - Ejemplo: `client["WebsiteController.find"]()`

---

## 🗺️ Vistas y Estructura de Navegación

El enrutador (`src/router/index.js`) tiene las siguientes rutas protegidas mediante un protector de rutas (`authGuard`):

- **`/` (Inicio)**: Página de presentación que despliega tarjetas informativas y los botones de Login/Logout de Google.
- **`/websites` (Mis Sitios)**: Panel principal del usuario. Filtra y lista únicamente los sitios web creados por la cuenta activa y muestra el estado actual, frecuencia de cron y profundidad.
- **`/website/new` (Agregar Sitio)**: Formulario dinámico para registrar un nuevo crawler. Permite configurar campos y escribir el snippet extractor. El campo del snippet cuenta con un diseño tipo editor de código de fondo oscuro.
- **`/website/:id/edit` (Editar Sitio)**: Carga la configuración del sitio actual permitiendo su modificación dinámica en caliente.
- **`/website/:id/pages` (Datos Extraídos)**: Vista tabular y expandible que muestra los documentos HTML procesados por el crawler. Permite buscar por palabras clave (título, contenido, URL) y expandir el contenido JSON/Texto extraído.
- **`/website/:id/errors` (Logs de Error)**: Historial de errores por sitio (ej. fallos de red 404, fallos de timeout de 15 segundos o errores sintácticos de JavaScript al evaluar el snippet).
- **`/user` (Mi Perfil)**: Detalles del perfil de Google del usuario autenticado.

---

## 🛠️ Comandos Disponibles

Ejecuta estos scripts desde el directorio `/Frontend`:

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias y librerías declaradas en el frontend. |
| `npm run dev` | Levanta el servidor local de desarrollo de Vite con recarga en caliente en `http://localhost:5173`. |
| `npm run build` | Compila y empaqueta la aplicación de manera optimizada y minificada para producción en la carpeta `dist/`. |
| `npm run preview` | Corre localmente un servidor web estático sirviendo el contenido ya compilado de `dist/` para pruebas de producción. |
