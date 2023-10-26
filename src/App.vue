<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { useAuthStore } from '@/stores/userAuthStore.js';
import { onMounted } from 'vue';

const { isAuthenticated } = useAuth0();
const { user } = useAuth0();
const { getAccessTokenSilently } = useAuth0();
const authStore = useAuthStore()

async function setAuthStore() {
  if (isAuthenticated) {
    const token = await getAccessTokenSilently();
    authStore.login(token, user.value)
  } else {
    authStore.logout()
  }
}

onMounted (() => {
  setAuthStore()
})

const toggleDrawer = ref(false);
</script>

<template>
  <v-app id="app">

    <v-app-bar app :color="'primary'">
      <v-toolbar-title class="white--text">Web Scraping App</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">

        <v-btn to="/" class="white--text">Página principal</v-btn>
        <template v-if="isAuthenticated">
          <v-btn to="/websites" class="white--text">Sitios web</v-btn>
          <v-btn to="/website/new" class="white--text">Agregar sitio</v-btn>
        </template>
        <v-btn to="/about" class="white--text">Acerca de</v-btn>
        <template v-if="!isAuthenticated">
          <LoginButton />
        </template>
        <template v-else>
          <v-btn to="/user"><v-icon left>mdi-account</v-icon></v-btn>
          <LogoutButton />
        </template>

      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  background: #ffffff;
  height: display-200vh;
}
</style>

