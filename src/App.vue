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
        <v-btn to="/" class="white--text">Home</v-btn>
        <v-btn to="/website/new" class="white--text">Nuevo sitio</v-btn>
        <v-btn to="/website/:id" class="white--text">Show</v-btn>
        <v-btn to="/website/:id/edit" class="white--text">Edit</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
