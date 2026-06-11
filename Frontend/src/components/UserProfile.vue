<script setup>
import { ref, onMounted, computed } from 'vue';
import { useAuthStore } from '@/stores/userAuthStore.js';

const authStore = useAuthStore();
const user = computed(() => authStore.userData);
const isAuthenticated = computed(() => authStore.isAuthenticated);
const accessToken = computed(() => authStore.token);
const copied = ref(false);

const copyToken = () => {
  if (accessToken.value) {
    navigator.clipboard.writeText(accessToken.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
};
</script>

<template>
  <v-container class="py-8 px-6" max-width="800">
    <v-row justify="center" v-if="isAuthenticated">
      <v-col cols="12" sm="10" md="8">
        <v-card class="rounded-xl border-light pa-6 text-center" variant="flat" border>
          <!-- User Avatar -->
          <v-avatar size="120" class="mx-auto mb-4 elevation-2 border-primary">
            <v-img :src="user?.picture || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'" alt="Imagen de Perfil"></v-img>
          </v-avatar>

          <!-- User Details -->
          <h1 class="text-h4 font-weight-black text-secondary mb-1">{{ user?.name }}</h1>
          <p class="text-body-1 text-grey-darken-1 mb-6">{{ user?.email }}</p>

          <v-divider class="my-4 opacity-50"></v-divider>

          <!-- JWT Token -->
          <div class="text-left">
            <div class="text-subtitle-1 font-weight-bold text-secondary mb-2">Token de Acceso (JWT)</div>
            <v-textarea
              v-model="accessToken"
              readonly
              variant="outlined"
              rows="4"
              class="token-textarea"
              hide-details
            ></v-textarea>
            <div class="d-flex justify-end mt-3">
              <v-btn
                variant="flat"
                color="primary"
                rounded="lg"
                size="small"
                prepend-icon="mdi-content-copy"
                @click="copyToken"
                class="font-weight-bold"
              >
                {{ copied ? '¡Copiado!' : 'Copiar Token' }}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.border-primary {
  border: 3px solid #3b82f6 !important;
}

.token-textarea :deep(textarea) {
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 12px;
  background-color: #f1f5f9;
  padding: 12px;
  border-radius: 8px;
  color: #475569;
  line-height: 1.5;
}
</style>