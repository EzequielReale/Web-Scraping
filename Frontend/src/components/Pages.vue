<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { client } from "../types/ClientAPI";

const route = useRoute();
const router = useRouter();

const websiteInfo = ref({});
const pages = ref([]);
const copyOfPages = ref([]);
const search = ref('');

function getPagesByWebsiteId(websiteId) {
    return client["WebsitePageController.find"](websiteId)
        .then(result => result.data)
        .catch(error => {
            console.error("Error fetching pages:", error);
            return [];
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
    getPagesByWebsiteId(route.params.id).then(
        result => {
            pages.value = result;
            copyOfPages.value = result;
        }
    );
});

function visitPage(url) {
    window.open(url, "_blank");
}

function filterByName(string) {
    if (!string) {
        resetFilter();
        return;
    }
    let filteredPages = copyOfPages.value.filter(page => {
        const title = page.doc.title ? page.doc.title.toLowerCase() : '';
        const body = page.doc.body ? page.doc.body.toLowerCase() : '';
        const url = page.doc.url ? page.doc.url.toLowerCase() : '';

        return url.includes(string.toLowerCase()) || title.includes(string.toLowerCase()) || body.includes(string.toLowerCase());
    });
    pages.value = filteredPages;
}

function resetFilter() {
    search.value = '';
    pages.value = copyOfPages.value;
}
</script>

<template>
  <v-container class="py-8 px-6" max-width="1200">
    <!-- Header -->
    <div class="d-flex align-center justify-space-between mb-6">
      <div class="d-flex align-center">
        <v-btn icon="mdi-arrow-left" variant="text" color="secondary" class="mr-3" to="/websites"></v-btn>
        <div>
          <h1 class="text-h4 font-weight-black text-secondary">Páginas de {{ websiteInfo.name || 'Cargando...' }}</h1>
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
            label="Buscar páginas por URL, título o contenido..."
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

    <!-- Empty State -->
    <div v-if="pages.length === 0" class="text-center py-12">
      <v-icon size="80" color="grey-lighten-1" class="mb-4">mdi-file-document-off-outline</v-icon>
      <h3 class="text-h5 text-grey-darken-2 font-weight-bold">No se encontraron páginas</h3>
      <p class="text-body-1 text-grey-darken-1 mt-2">
        Asegúrate de que el raspador se esté ejecutando y que el snippet esté configurado correctamente.
      </p>
    </div>

    <!-- Pages List -->
    <v-row v-else>
      <v-col
        v-for="page in pages"
        :key="page.id"
        cols="12"
      >
        <v-card class="rounded-xl border-light pa-5" variant="flat" border>
          <div class="d-flex justify-space-between align-start flex-wrap gap-3">
            <div class="overflow-hidden" style="flex: 1; min-width: 280px;">
              <div class="d-flex align-center mb-1">
                <v-icon color="primary" class="mr-2">mdi-file-document-outline</v-icon>
                <h3 class="text-h6 font-weight-bold text-secondary text-truncate">
                  {{ page.doc.title || 'Página Sin Título' }}
                </h3>
              </div>
              <a
                :href="page.doc.url"
                target="_blank"
                class="text-caption text-primary text-decoration-none d-flex align-center"
              >
                <span>{{ page.doc.url }}</span>
                <v-icon size="10" class="ml-1">mdi-open-in-new</v-icon>
              </a>
            </div>
            <v-btn
              color="primary"
              variant="tonal"
              rounded="xl"
              size="small"
              class="font-weight-bold"
              prepend-icon="mdi-eye-outline"
              @click="visitPage(page.doc.url)"
            >
              Visitar Página
            </v-btn>
          </div>

          <!-- Parsed Body Content -->
          <v-expansion-panels class="mt-4" variant="accordion">
            <v-expansion-panel
              title="Ver datos extraídos"
              class="rounded-lg border-light"
              elevation="0"
            >
              <template v-slot:text>
                <div class="text-subtitle-2 font-weight-bold text-secondary mb-1">Contenido Extraído:</div>
                <pre class="scraped-content-pre">{{ page.doc.body || JSON.stringify(page.doc, null, 2) }}</pre>
              </template>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.scraped-content-pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  background-color: #f1f5f9;
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  color: #334155;
  max-height: 200px;
  overflow-y: auto;
}

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>