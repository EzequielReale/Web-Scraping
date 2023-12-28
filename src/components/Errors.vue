<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { client } from "../types/ClientAPI";

const route = useRoute();
const router = useRouter();

const webErrors = ref({});
const copyOfWebErrors = ref({});
const websiteInfo = ref({});

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
  let filteredWebErrors = copyOfWebErrors.value.filter(webError => webError.log.toLowerCase().includes(string.toLowerCase()))
  webErrors.value = filteredWebErrors;
}

function resetFilter() {
  webErrors.value = copyOfWebErrors.value;
}
</script>

<template>
  <v-container fluid class="align-center justify-center" style="width: 40vh;">

    <v-row class="mb-4">
      <v-col cols="10">
        <v-text-field v-model="search" label="Buscar" append-icon="mdi-magnify"
          @click:append="filterByName(search)"></v-text-field>
      </v-col>

      <v-col cols="1">
        <v-btn @click="resetFilter"><v-icon>mdi-refresh</v-icon></v-btn>
      </v-col>
    </v-row>

    <h1 class="display-2 mb-4">Errores del sitio {{ websiteInfo.name }}:</h1>
    <v-sheet width="800" class="mx-auto">
      <v-list>
        <v-list-item-group v-if="webErrors.length > 0">
          <v-list-item v-for="webError in webErrors" :key="webError.id" class="website-list-item">
            <v-list-item-icon>
              <v-icon>mdi-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="mx-auto">
              <v-list-item-title class="headline font-weight-bold">
                Error al procesar el sitio {{ websiteInfo.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="caption">{{ websiteInfo.url }}</v-list-item-subtitle>
              <v-list-item-text class="caption">{{ webError.log }}</v-list-item-text>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-list-item v-else>
          <v-list-item-content>
            <v-list-item-title class="headline font-weight-bold">
              ¡Hurra! No hay errores para mostrar<v-icon>mdi-party-popper</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-container>
</template>

<style scoped>
.website-list-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}

.error-content {
  max-width: mx-auto;
  /* Adjust the max-width according to your design */
  word-break: break-word;
  /* Allow long words to break onto the next line */
  white-space: pre-wrap;
  /* Wrap the text and preserve line breaks */
}

.headline {
  font-size: 24px;
  color: #333;
}
</style>
