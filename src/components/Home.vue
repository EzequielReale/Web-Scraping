<script setup>
  import WebsiteService from "../services/WebsiteService";
  import { ref, onBeforeMount } from "vue";
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();
  const router = useRouter();

  const websites = ref({}); // Inicializa como una matriz vacía
  const error = ref(false);
  const success = ref(false);

  function setWebsites() {
    WebsiteService.getWebsites().then(
        result => websites.value = result
    )
  }

  onBeforeMount(() => {
    setWebsites();
  });

  // Define las funciones para editar y eliminar
  function editWebsite(website) {
    // Agrega aquí la lógica para editar un sitio web
  }

  function deleteWebsite(id) {
    // Agrega aquí la lógica para eliminar un sitio web por su ID
  }
</script>

<template>
  <v-container fluid>
    <h1>Lista de Sitios Web</h1>
    <v-list>
      <v-list-item v-for="website in websites" :key="website.id">
        <v-list-item-title>{{ website.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ website.url }}</v-list-item-subtitle>
        <v-list-item-action>

        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-container>
</template>

