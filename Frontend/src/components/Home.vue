<script setup>
import { computed } from "vue";
import { useAuthStore } from "@/stores/userAuthStore.js";
import LoginButton from "@/components/buttons/login-button.vue";

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

const features = [
  {
    icon: 'mdi-clock-outline',
    color: 'primary',
    title: 'Frecuencia Programada',
    desc: 'Indica cada cuántos segundos se debe ejecutar el raspado. La aplicación se encargará del resto.'
  },
  {
    icon: 'mdi-file-tree',
    color: 'success',
    title: 'Profundidad de Niveles',
    desc: 'Navega recursivamente a través de las páginas del sitio web hasta la profundidad que necesites.'
  },
  {
    icon: 'mdi-code-braces',
    color: 'warning',
    title: 'Snippets Personalizados',
    desc: 'Utiliza Cheerio en Node.js para escribir reglas de extracción exactas en formato JavaScript.'
  },
  {
    icon: 'mdi-alert-circle-outline',
    color: 'error',
    title: 'Registro de Errores',
    desc: 'Monitorea cualquier error de red o de parseo para corregir tus selectores de inmediato.'
  }
];
</script>

<template>
  <v-container class="py-12 px-6" max-width="1200">
    <!-- Hero Section -->
    <v-row class="align-center py-8">
      <v-col cols="12" md="7">
        <h1 class="text-h2 font-weight-black text-secondary leading-tight mb-4">
          Monitorea y Extrae Datos de la Web <span class="text-primary">Automáticamente</span>
        </h1>
        <p class="text-h6 text-grey-darken-1 font-weight-regular mb-8">
          Configura raspadores web personalizados en segundos, define frecuencias de actualización y analiza los datos extraídos en tiempo real con snippets de JavaScript.
        </p>
        <div class="d-flex flex-wrap gap-4 align-center">
          <v-btn
            v-if="isAuthenticated"
            size="large"
            color="primary"
            rounded="xl"
            class="px-8 font-weight-bold"
            elevation="2"
            to="/websites"
          >
            Ir a Mis Sitios
          </v-btn>
          <div v-else class="d-flex flex-column align-start">

            <LoginButton />
          </div>
          <v-btn
            size="large"
            variant="outlined"
            color="secondary"
            rounded="xl"
            class="px-8 font-weight-bold ml-sm-4"
            to="/about"
          >
            Saber Más
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="d-flex justify-center">
        <v-card class="elevation-12 rounded-xl overflow-hidden" max-width="450" width="100%">
          <v-img src="/src/img/Logo.png" alt="Web Scraping App" cover height="300">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height bg-grey-lighten-4">
                <v-icon size="64" color="primary">mdi-spider-web</v-icon>
              </div>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Features Section -->
    <v-row class="mt-12 pt-8">
      <v-col cols="12">
        <div class="text-center mb-10">
          <h2 class="text-h4 font-weight-bold text-secondary">¿Cómo Funciona?</h2>
          <p class="text-body-1 text-grey-darken-1 mt-2">Nuestra plataforma cuenta con herramientas avanzadas para tu flujo de trabajo</p>
        </div>
      </v-col>

      <v-col cols="12" sm="6" lg="3" v-for="(feature, idx) in features" :key="idx">
        <v-card class="h-100 rounded-xl pa-5 border-light" variant="flat" border>
          <v-avatar :color="feature.color + '-lighten-5'" size="56" class="mb-4">
            <v-icon :color="feature.color" size="28">{{ feature.icon }}</v-icon>
          </v-avatar>
          <h3 class="text-h6 font-weight-bold text-secondary mb-2">{{ feature.title }}</h3>
          <p class="text-body-2 text-grey-darken-1">{{ feature.desc }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.gap-4 {
  gap: 16px;
}
</style>