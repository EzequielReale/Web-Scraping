<script setup>
import WebsiteService from "../services/WebsiteService";
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { client } from "../types/ClientAPI";

const route = useRoute();
const router = useRouter();

const websites = ref({})
const error = ref(false)
const success = ref(false)


function setWebsites() {
  //WebsiteService.getWebsites().then(
  //  result => websites.value = result
  //)
  client["WebsiteController.find"]().then(
    result => websites.value = result.data
  )
}

onBeforeMount(() => {
  setWebsites();
});

function getSubtitle(website) {
  return `${website.url} | Actualización: cada ${website.frequency} segundos | Niveles de página: ${website.pageLevels}`
}

function editWebsite(website) {
  router.push(`/website/${website.id}/edit`)
}

function deleteWebsite(id) {
  WebsiteService.deleteWebsite(id).then(
    () => {
      success.value = true
      setWebsites()
    },
    () => error.value = true
  )
}

function seePages(website) {
  router.push(`/website/${website.id}/pages`)
}

function seeErrors(website) {
  router.push(`/website/${website.id}/errors`)
}

</script>

<template>
  <v-container fluid class="align-center justify-center" style="width: 40vh;">
    <h1 class="display-2 mb-4">Tus Sitios Web</h1>
    <v-sheet width="570" class="mx-auto">
      <v-list>
        <v-list-item-group v-if="websites.length > 0">
          <v-list-item v-for="website in websites" :key="website.id" class="website-list-item">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="headline font-weight-bold">{{ website.name }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{ getSubtitle(website) }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn class="mr-2" @click="editWebsite(website)" color="primary">
                Editar<v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn class="mr-2" @click="deleteWebsite(website.id)" color="error">
                Eliminar<v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn class="mr-2" @click="seePages(website)" color="primary">
                Resultados<v-icon>mdi-file-document-outline</v-icon>
              </v-btn>
              <v-btn class="mr-2" @click="seeErrors(website)" color="error">
                Errores<v-icon>mdi-alert</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
        <v-alert v-else dense outlined color="info">
          No se encontraron sitios web.
        </v-alert>
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

.headline {
  font-size: 24px;
  /* Tamaño de fuente personalizado */
  color: #333;
  /* Color de fuente personalizado */
}
</style>
