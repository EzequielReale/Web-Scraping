<script setup>
import { useAuthStore } from '@/stores/userAuthStore.js'
import { useAuth0 } from "@auth0/auth0-vue";

const {  user, isAuthenticated } = useAuth0();
const authStore = useAuthStore()
const accessToken = authStore.getToken
console.log(user)
</script>


<template>
    <v-container>
      <pre v-if="isAuthenticated">
      <h1 class="display-2 text-center mb-4">Perfil de Usuario</h1>
      <v-row justify="center">
          <v-card elevation="2">
                <v-col>
                  <div class="text-center">
                    <v-avatar size="95">
                      <img :src="user.picture" alt="Profile Image"/>
                    </v-avatar>
                  </div>
                  <h2 class="text-h5 text-center">{{ user.name }}</h2>
                  <div class="text-center">{{ user.email }}</div>
                </v-col>
            <v-card-text>
              <div class="text-center">
                <span title="Token de Usuario">{{ accessToken }}</span>
              </div>
            </v-card-text>
          </v-card>
      </v-row>
      </pre>
    </v-container>
  </template>
  