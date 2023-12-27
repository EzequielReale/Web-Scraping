<script>
import WebsiteService from '../services/WebsiteService';
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { user } = useAuth0();
    const router = useRouter();

    const website = ref({
      name: '',
      url: '',
      pageLevels: 1,
      frequency: 1,
      snippet: '(cheerio)=>{\nreturn {title:cheerio("title").text()}\n}',
    });

    const addWebsite = async () => {
      // Validación de campos
      if (!website.value.name || !website.value.url || website.value.pageLevels <= 0 || website.value.pageLevels > 99 || website.value.frequency < 1 || !website.value.snippet) {
        return alert('Debe llenar correctamente todos los campos');
      }

      const newWebsite = {
        name: website.value.name,
        url: website.value.url,
        pageLevels: website.value.pageLevels,
        frequency: website.value.frequency,
        snippet: website.value.snippet,
        userId: user.value.sub,
      };

      try {
        await WebsiteService.createWebsite(newWebsite);
        router.push('/websites');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Retorna las variables y funciones que quieres exponer al componente
    return {
      website,
      addWebsite,
    };
  },
};
</script>

<template>
  <v-container fluid class="align-center justify-center" style="width: 80vh;">
    <h1 class="display-2 mb-4">Agregar Sitio Web</h1>
    <v-form @submit.prevent="addWebsite">
      <v-text-field v-model="website.name" label="Nombre" required></v-text-field>
      <v-text-field v-model="website.url" label="URL" required></v-text-field>
      <v-text-field v-model.number="website.pageLevels" label="Niveles de página (1-99)" required min="1" max="99"
        type="number"></v-text-field>
      <v-text-field v-model.number="website.frequency" label="Frecuencia (segundos)" required min="1"
        type="number"></v-text-field>
      <v-textarea v-model="website.snippet" label="Snippet" required></v-textarea>
      <v-btn class="mr-2" type="submit" color="primary">Agregar</v-btn>
      <v-btn class="mr-2" @click="$router.push('/websites')" color="error">Cancelar</v-btn>
    </v-form>
  </v-container>
</template>
