<script>
import WebsiteService from '../services/WebsiteService';

export default {
  data() {
    return {
      website: {
        name: '',
        url: '',
        pageLevels: 0,
        frequency: null,
        snippet: '',
      },
      frequencies: ['Diario', 'Semanal', 'Mensual'],
    };
  },
  methods: {
    addWebsite() {
      // Validación de campos
      if (!this.website.name || !this.website.url || this.website.pageLevels <= 0 || this.website.pageLevels > 99 || !this.website.frequency || !this.website.snippet) {
        return alert('Debe llenar todos los campos');
      }

      // Crea un objeto con los datos del sitio web
      const newWebsite = {
        name: this.website.name,
        url: this.website.url,
        pageLevels: this.website.pageLevels,
        //frequency: this.website.frequency,
        snippet: this.website.snippet,
      };

      // Llama al servicio para agregar el sitio web
      WebsiteService.createWebsite(newWebsite)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>


<template>
  <v-container fluid class="align-center justify-center" style="width: 100vh;">
    <h1 class="display-2 mb-4">Agregar Sitio Web</h1>
    <v-form @submit.prevent="addWebsite">
      <v-text-field v-model="website.name" label="Nombre" required></v-text-field>
      <v-text-field v-model="website.url" label="URL" required></v-text-field>
      <v-text-field v-model.number="website.pageLevels" label="Niveles de página (1-99)" required min="1" max="99"
        type="number"></v-text-field>
      <v-select v-model="website.frequency" :items="frequencies" label="Frecuencia" required></v-select>
      <v-text-field v-model="website.snippet" label="Snippet" required></v-text-field>
      <v-btn type="submit" color="primary">Agregar</v-btn>
    </v-form>
  </v-container>
</template>
