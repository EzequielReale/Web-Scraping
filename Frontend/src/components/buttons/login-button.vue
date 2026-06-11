<script setup>
import { onMounted, computed, watch } from 'vue';
import { useAuthStore } from '@/stores/userAuthStore.js';

const authStore = useAuthStore();

const isGoogleClientIdConfigured = computed(() => {
  const cid = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  return !!(cid && cid.trim() !== '' && !cid.includes('YOUR_GOOGLE_CLIENT_ID_HERE'));
});

const isGsiInitialized = computed(() => authStore.isGsiInitialized);

const renderGoogleButton = () => {
  if (isGoogleClientIdConfigured.value && isGsiInitialized.value && typeof google !== 'undefined' && document.getElementById("google-login-btn")) {
    google.accounts.id.renderButton(
      document.getElementById("google-login-btn"),
      { 
        theme: "filled_blue", 
        size: "large", 
        shape: "pill", 
        text: "continue_with",
        locale: "es" 
      }
    );
  }
};

watch(isGsiInitialized, (newVal) => {
  if (newVal) {
    setTimeout(renderGoogleButton, 50);
  }
}, { immediate: true });

onMounted(() => {
  renderGoogleButton();
});
</script>

<template>
  <div v-if="isGoogleClientIdConfigured" id="google-login-btn" class="d-inline-block"></div>
  <v-btn v-else disabled variant="outlined" color="grey" rounded="xl" prepend-icon="mdi-google" class="font-weight-bold">
    Iniciar con Google
  </v-btn>
</template>