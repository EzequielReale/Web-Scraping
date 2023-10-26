<script setup>
import { useAuthStore } from '@/stores/userAuthStore.js'
const authStore = useAuthStore()
const user = authStore.getUserData
const accessToken = authStore.getToken
</script>


<template>
    <v-container>
      <h1 class="display-2 text-center mb-4">Perfil de Usuario</h1>
      <v-row justify="center">
          <v-card elevation="2">
                <v-col>
                  <div class="text-center">
                    <v-avatar size="95">
                      <img :src="user.picture" alt="Profile Image" />
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
    </v-container>
  </template>
  
  