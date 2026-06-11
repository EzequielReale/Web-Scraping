<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { ref, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { isUri } from 'valid-url';
import { client } from '../types/ClientAPI';

const router = useRouter();
const { user } = useAuth0();

const website = ref({
  name: '',
  url: '',
  pageLevels: 0,
  frequency: 0,
  snippet: '',
});

const getWebsiteData = async () => {
  const websiteId = router.currentRoute.value.params.id;

  try {
    const websiteData = await client["WebsiteController.findById"](websiteId);
    website.value = websiteData.data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const editWebsite = async () => {
  // Validación de campos
  if (!website.value.name || !website.value.url || website.value.pageLevels <= 0 || website.value.pageLevels > 99 || website.value.frequency < 1 || !website.value.snippet) {
    return alert('Debe llenar correctamente todos los campos');
  }
  if (!isUri(website.value.url)) {
    return alert('Debe ingresar una URL válida');
  }

  const updatedWebsite = {
    id: router.currentRoute.value.params.id,
    name: website.value.name,
    url: website.value.url,
    pageLevels: website.value.pageLevels,
    frequency: website.value.frequency,
    snippet: website.value.snippet,
    userId: user.value.sub,
  };

  try {
    await client["WebsiteController.updateById"](updatedWebsite.id, updatedWebsite);
    router.push('/websites');
  } catch (error) {
    console.error('Error:', error);
  }
};

const goToWebsites = () => {
  router.push('/websites');
};

onBeforeMount(() => {
  getWebsiteData();
});

</script>

  
<template>
    <v-container fluid class="align-center justify-center" style="width: 80vh;">
        <h1 class="display-2 mb-4">Editar Sitio Web</h1>
        <v-form @submit.prevent="editWebsite">
            <v-text-field v-model="website.name" label="Nombre" required></v-text-field>
            <v-text-field v-model="website.url" label="URL" required></v-text-field>
            <v-text-field v-model.number="website.pageLevels" label="Niveles de página (1-99)" required min="1" max="99"
                type="number"></v-text-field>
            <v-text-field v-model.number="website.frequency" label="Frecuencia (segundos)" required min="1"
                type="number"></v-text-field>
            <v-textarea v-model="website.snippet" label="Snippet" required></v-textarea>
            <v-btn class="mr-2" type="submit" color="primary">Guardar Cambios</v-btn>
            <v-btn class="mr-2" @click="goToWebsites" color="error">Cancelar</v-btn>
        </v-form>
    </v-container>
</template>
  