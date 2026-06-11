<script setup>
import { useAuthStore } from '@/stores/userAuthStore.js';
import { client } from '@/types/ClientAPI';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  localStorage.removeItem('google_id_token');
  localStorage.removeItem('google_user_data');
  delete client.defaults.headers.common['Authorization'];
  if (typeof google !== 'undefined') {
    google.accounts.id.disableAutoSelect();
  }
  window.location.href = '/';
};
</script>
   
<template>
  <v-btn variant="text" color="error" icon @click="handleLogout" title="Cerrar Sesión">
    <v-icon>mdi-logout</v-icon>
  </v-btn>
</template>