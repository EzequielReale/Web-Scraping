<script>
import WebsiteService from '../services/WebsiteService';

export default {
  data() {
    return {
      website: {
        name: '',
        url: '',
        pageLevels: 1,
        frequency: 1,
        snippet: '(cheerio)=>{\nreturn {attr:cheerio("elem")}\n}',
      },
    };
  },
  methods: {
    addWebsite() {
      // Validación de campos
      if (!this.website.name || !this.website.url || this.website.pageLevels <= 0 || this.website.pageLevels > 99 || this.website.frequency < 1 || !this.website.snippet) {
        return alert('Debe llenar correctamente todos los campos');
      }

      // Crea un objeto con los datos del sitio web
      const newWebsite = {
        name: this.website.name,
        url: this.website.url,
        pageLevels: this.website.pageLevels,
        frequency: this.website.frequency,
        snippet: this.website.snippet,
      };

      // Llama al servicio para agregar el sitio web
      WebsiteService.createWebsite(newWebsite)
        .then(() => {
          this.$router.push('/websites');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
};
</script>


<template>
  <v-container fluid class="align-center justify-center" style="width: 80vh;">
    <h1 class="display-2 mb-4">Agregar Sitio Web</h1>
    <v-form @submit.prevent="addWebsite">
      <v-text-field v-model="website.name" label="Nombre" required></v-text-field>
      <v-text-field v-model="website.url" label="URL" required></v-text-field>
      <v-text-field v-model.number="website.pageLevels" label="Niveles de página (1-99)" required min="1" max="99" type="number"></v-text-field>
      <v-text-field v-model.number="website.frequency" label="Frecuencia (segundos)" required min="1" type="number"></v-text-field>
      <v-textarea v-model="website.snippet" label="Snippet" required></v-textarea>
      <v-btn class="mr-2" type="submit" color="primary">Agregar</v-btn>
      <v-btn class="mr-2" @click="$router.push('/websites')" color="error">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
