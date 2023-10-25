<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const toggleDrawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar app :color="'primary'">
      <v-toolbar-title>Web Scraping App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn to="/" class="white--text">Página principal</v-btn>
        <v-btn to="/website/new" class="white--text">Agregar sitio</v-btn>
        <v-btn to="/about" class="white--text">Acerca de</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
