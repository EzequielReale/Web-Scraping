<script setup>
import { ref, computed, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import { useAuthStore } from '@/stores/userAuthStore.js';
import { client } from '@/types/ClientAPI';

const authStore = useAuthStore();

console.log("--- DEBUG DIAGNOSTIC ---");
console.log("VITE_GOOGLE_CLIENT_ID from Vite:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
console.log("Current Origin:", window.location.origin);
console.log("------------------------");

const isAuthenticated = computed(() => authStore.isAuthenticated);
const user = computed(() => authStore.userData);

// Check if a valid Client ID has been configured
const isGoogleClientIdConfigured = computed(() => {
  const cid = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return !!(cid && cid.trim() !== '' && !cid.includes('YOUR_GOOGLE_CLIENT_ID_HERE'));
});

function decodeJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Failed to decode JWT:", e);
    return null;
  }
}

function handleCredentialResponse(response) {
  const token = response.credential;
  const userData = decodeJwt(token);
  if (userData) {
    authStore.login(token, userData);
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('google_id_token', token);
    localStorage.setItem('google_user_data', JSON.stringify(userData));
    window.location.reload();
  }
}

onMounted(() => {
  // Load cached token from localStorage
  const cachedToken = localStorage.getItem('google_id_token');
  const cachedUser = localStorage.getItem('google_user_data');
  if (cachedToken && cachedUser) {
    try {
      const userData = JSON.parse(cachedUser);
      authStore.login(cachedToken, userData);
      client.defaults.headers.common['Authorization'] = `Bearer ${cachedToken}`;
    } catch (e) {
      console.error("Failed to restore session:", e);
      localStorage.removeItem('google_id_token');
      localStorage.removeItem('google_user_data');
    }
  }

  // Initialize Google Sign-In only if we have a valid Client ID
  const initGsi = () => {
    if (isGoogleClientIdConfigured.value && typeof google !== 'undefined') {
      console.log("GSI initialization started.");
      console.log("VITE_GOOGLE_CLIENT_ID from env:", import.meta.env.VITE_GOOGLE_CLIENT_ID);
      console.log("Current Window Origin:", window.location.origin);
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false
      });
      authStore.setGsiInitialized(true);
    } else if (typeof google !== 'undefined') {
      // Not initialized since client ID is missing
    } else {
      setTimeout(initGsi, 100);
    }
  };
  initGsi();
});
</script>

<template>
  <v-app id="app">
    <!-- Navbar -->
    <v-app-bar flat border class="px-6" color="surface">
      <v-app-bar-title class="font-weight-black text-secondary d-flex align-center">
        <v-icon icon="mdi-spider-web" class="mr-2" color="primary" size="28"></v-icon>
        <span class="text-h6 font-weight-black">
          WebScraping<span class="text-primary">.com</span>
        </span>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/" variant="text" class="mx-1 font-weight-bold" rounded="xl">Inicio</v-btn>
      <template v-if="isAuthenticated">
        <v-btn to="/websites" variant="text" class="mx-1 font-weight-bold" rounded="xl">Mis Sitios</v-btn>
        <v-btn to="/website/new" variant="elevated" color="primary" class="mx-1 font-weight-bold" rounded="xl" prepend-icon="mdi-plus">
          Agregar Sitio
        </v-btn>
      </template>
      <v-btn to="/about" variant="text" class="mx-1 font-weight-bold" rounded="xl">Acerca de</v-btn>

      <v-divider vertical class="mx-3 my-3" v-if="isAuthenticated"></v-divider>

      <template v-if="isAuthenticated">
        <v-btn to="/user" variant="text" icon class="mx-1" title="Ver Perfil">
          <v-avatar size="32">
            <v-img :src="user?.picture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'"></v-img>
          </v-avatar>
        </v-btn>
        <LogoutButton />
      </template>
    </v-app-bar>

    <!-- Main Content Area -->
    <v-main class="bg-background">
      <v-container fluid class="pa-0">
        <!-- Configuration Warning Banner if Google Client ID is missing -->
        <v-container class="py-4 px-6 mt-4" v-if="!isGoogleClientIdConfigured">
          <v-alert
            type="warning"
            variant="tonal"
            title="Configuración de Google Sign-In requerida"
            class="rounded-xl border-light mb-6"
            border="start"
          >
            <div class="mt-2 text-body-2">
              Para poder iniciar sesión, debes configurar tu propio <strong>Client ID de Google</strong>. 
              Sigue estos pasos para configurarlo en local:
              <ol class="mt-2 ml-4">
                <li>Ve a la <a href="https://console.cloud.google.com/" target="_blank" class="font-weight-bold text-decoration-underline text-warning-darken-3">Google Cloud Console</a>.</li>
                <li>Crea un proyecto (o selecciona uno existente).</li>
                <li>Ve a <strong>API y Servicios</strong> &gt; <strong>Pantalla de consentimiento de OAuth</strong> y configúrala.</li>
                <li>Ve a <strong>Credenciales</strong> &gt; <strong>Crear credenciales</strong> &gt; <strong>ID de cliente de OAuth</strong>.</li>
                <li>Elige <strong>Aplicación Web</strong>. Agrega <code>http://localhost:5173</code> (o tu puerto actual) en <strong>Orígenes de JavaScript autorizados</strong>.</li>
                <li>Copia el <strong>ID de cliente</strong> generado.</li>
                <li>Pégalo en tu archivo <code>Frontend/env</code> (o renombrado a <code>.env</code>) en la variable <code>VITE_GOOGLE_CLIENT_ID</code>.</li>
              </ol>
            </div>
          </v-alert>
        </v-container>

        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
#app {
  background-color: #f8fafc !important;
}
</style>
