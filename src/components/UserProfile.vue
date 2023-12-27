<script setup>
import { useAuthStore } from '@/stores/userAuthStore.js'
import { useAuth0 } from "@auth0/auth0-vue";

const { user, isAuthenticated } = useAuth0();
const authStore = useAuthStore()
const accessToken = authStore.getToken
</script>


<template>
  <v-container>
    <pre v-if="isAuthenticated">
      <h1 class="display-2 text-center mb-4">Perfil de Usuario</h1>
      <v-row justify="center">
          <v-card elevation="2">
                <v-col>
                  <v-avatar size="95">
                    <img :src="user.picture" alt="Profile Image" class="center"/>
                  </v-avatar>
                  <div class="text-center">
                    <h2 class="text-h5">{{ user.name }}</h2>
                    <div>{{ user.email }}</div>
                    <div>Token de Usuario: {{ accessToken }}</div>
                  </div>
                </v-col>
          </v-card>
      </v-row>
      </pre>
  </v-container>
</template>
  