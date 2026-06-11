<template>
  <v-container class="py-8 px-6" max-width="900">
    <v-card class="rounded-xl border-light pa-8" variant="flat" border>
      <div class="text-center mb-8">
        <v-avatar color="primary-lighten-5" size="80" class="mb-4">
          <v-icon color="primary" size="40">mdi-spider-web</v-icon>
        </v-avatar>
        <h1 class="text-h3 font-weight-black text-secondary">Acerca de Web Scraping App</h1>
        <p class="text-body-1 text-grey-darken-1 mt-2">Tu herramienta automatizada para extracción y análisis de datos en línea.</p>
      </div>

      <v-divider class="my-6 opacity-50"></v-divider>

      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <div class="d-flex align-start mb-4">
            <v-icon color="primary" class="mr-3 mt-1" size="24">mdi-target</v-icon>
            <div>
              <h3 class="text-h6 font-weight-bold text-secondary mb-2">Nuestra Misión</h3>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed">
                Facilitar la extracción de datos en línea para que puedas tomar decisiones informadas en tu negocio o proyecto. Queremos simplificar el proceso de recopilación de datos web y ofrecer herramientas poderosas para analizar y utilizar la información obtenida.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="d-flex align-start mb-4">
            <v-icon color="success" class="mr-3 mt-1" size="24">mdi-account-group-outline</v-icon>
            <div>
              <h3 class="text-h6 font-weight-bold text-secondary mb-2">Nuestro Equipo</h3>
              <p class="text-body-2 text-grey-darken-1 leading-relaxed">
                Formado por profesionales apasionados por la tecnología y la analítica de datos. Trabajamos arduamente para mejorar continuamente nuestra aplicación, garantizando que el motor de rastreo sea óptimo, rápido y confiable para cualquier tipo de sitio web.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style scoped>
.leading-relaxed {
  line-height: 1.625;
}
</style>
