<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { client } from "../types/ClientAPI";

const route = useRoute();

const webErrors = ref([]);
const copyOfWebErrors = ref([]);
const websiteInfo = ref({});
const search = ref('');

function getErrorsById(websiteId) {
  return client["WebsiteWebsiteErrorController.find"](websiteId)
    .then(result => {
      webErrors.value = result.data;
      copyOfWebErrors.value = result.data;
    })
    .catch(error => {
      console.error("Error fetching errors:", error);
    });
}

function getWebsiteInfo(websiteId) {
  return client["WebsiteController.findById"](websiteId)
    .then(result => {
      websiteInfo.value = result.data;
    })
    .catch(error => {
      console.error("Error fetching website:", error);
    });
}

onBeforeMount(() => {
  getWebsiteInfo(route.params.id);
  getErrorsById(route.params.id);
});

function filterByName(string) {
  if (!string) {
    resetFilter();
    return;
  }
  let filteredWebErrors = copyOfWebErrors.value.filter(webError => 
    webError.log && webError.log.toLowerCase().includes(string.toLowerCase())
  );
  webErrors.value = filteredWebErrors;
}

function resetFilter() {
  search.value = '';
  webErrors.value = copyOfWebErrors.value;
}
</script>

<template>
  <v-container class="py-8 px-6" max-width="1200">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div class="d-flex align-center">
        <v-btn icon="mdi-arrow-left" variant="text" color="secondary" class="mr-3" to="/websites"></v-btn>
        <div>
          <h1 class="text-h4 font-weight-black text-secondary">Errores de {{ websiteInfo.name || 'Cargando...' }}</h1>
          <p class="text-body-2 text-grey-darken-1">{{ websiteInfo.url }}</p>
        </div>
      </div>
    </div>

    <!-- Search/Filter Bar -->
    <v-card class="rounded-xl border-light pa-4 mb-6" variant="flat" border>
      <v-row class="align-center" dense>
        <v-col cols="12" sm="8" md="9">
          <v-text-field
            v-model="search"
            label="Buscar errores por contenido..."
            variant="outlined"
            density="comfortable"
            prepend-inner-icon="mdi-magnify"
            hide-details
            @keyup.enter="filterByName(search)"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="3" class="d-flex gap-2 justify-end">
          <v-btn
            color="primary"
            variant="elevated"
            rounded="lg"
            class="font-weight-bold"
            @click="filterByName(search)"
          >
            Buscar
          </v-btn>
          <v-btn
            color="secondary"
            variant="outlined"
            icon="mdi-refresh"
            rounded="lg"
            class="ml-2"
            @click="resetFilter"
          ></v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!-- Empty State / Success -->
    <div v-if="webErrors.length === 0" class="text-center py-12">
      <v-avatar color="success-lighten-5" size="100" class="mb-4">
        <v-icon size="48" color="success">mdi-party-popper</v-icon>
      </v-avatar>
      <h3 class="text-h5 text-grey-darken-2 font-weight-bold">¡Hurra! No hay errores</h3>
      <p class="text-body-1 text-grey-darken-1 mt-2">
        El raspador está procesando el sitio web sin inconvenientes.
      </p>
    </div>

    <!-- Errors List -->
    <v-row v-else>
      <v-col
        v-for="webError in webErrors"
        :key="webError.id"
        cols="12"
      >
        <v-card class="rounded-xl border-error pa-5" variant="flat" border>
          <div class="d-flex align-center mb-3">
            <v-avatar color="error-lighten-5" size="40" class="mr-3">
              <v-icon color="error" size="20">mdi-alert-circle</v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h6 font-weight-bold text-error">
                Error de Procesamiento
              </h3>
              <div class="text-caption text-grey-darken-1 mt-n1">
                {{ websiteInfo.url }}
              </div>
            </div>
          </div>

          <v-divider class="my-3 opacity-50"></v-divider>

          <div class="text-subtitle-2 font-weight-bold text-secondary mb-1">Detalle del log:</div>
          <pre class="error-log-pre">{{ webError.log }}</pre>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.border-error {
  border: 1px solid #fee2e2 !important;
  background-color: #fef2f2 !important;
}

.error-log-pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  background-color: #0f172a;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #f87171;
  max-height: 250px;
  overflow-y: auto;
  line-height: 1.5;
}
</style>
