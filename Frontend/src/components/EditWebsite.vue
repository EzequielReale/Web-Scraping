<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { isUri } from 'valid-url';
import { client } from '../types/ClientAPI';
import { useAuthStore } from '@/stores/userAuthStore.js';

const router = useRouter();
const authStore = useAuthStore();

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
    userId: authStore.userData?.sub,
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
  <v-container class="py-8 px-6" max-width="900">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <v-card class="rounded-xl border-light pa-6" variant="flat" border>
          <div class="d-flex align-center mb-6">
            <v-btn icon="mdi-arrow-left" variant="text" color="secondary" class="mr-3" @click="goToWebsites"></v-btn>
            <div>
              <h1 class="text-h4 font-weight-black text-secondary">Editar Sitio Web</h1>
              <p class="text-body-2 text-grey-darken-1">Modifica la configuración de este rastreador web.</p>
            </div>
          </div>

          <v-form @submit.prevent="editWebsite">
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field
                  v-model="website.name"
                  label="Nombre del sitio"
                  placeholder="Ej. Mi Blog"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-format-title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field
                  v-model="website.url"
                  label="URL inicial"
                  placeholder="https://ejemplo.com"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-link-variant"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field
                  v-model.number="website.pageLevels"
                  label="Profundidad de niveles (1-99)"
                  type="number"
                  min="1"
                  max="99"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-file-tree"
                  hint="Cuántos enlaces de profundidad seguir"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field
                  v-model.number="website.frequency"
                  label="Frecuencia de actualización (segundos)"
                  type="number"
                  min="1"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-clock-outline"
                  hint="Intervalo de ejecución del raspador"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row class="mt-4">
              <v-col cols="12">
                <div class="text-subtitle-2 font-weight-bold text-secondary mb-1">
                  Snippet de Extracción (Cheerio JS)
                </div>
                <v-textarea
                  v-model="website.snippet"
                  variant="outlined"
                  rows="6"
                  class="code-textarea"
                  hint="Función JS que recibe Cheerio y retorna un objeto de datos"
                  persistent-hint
                  required
                ></v-textarea>
              </v-col>
            </v-row>

            <div class="d-flex justify-end mt-8 gap-3">
              <v-btn
                variant="text"
                color="secondary"
                rounded="xl"
                class="px-6 font-weight-bold"
                @click="goToWebsites"
              >
                Cancelar
              </v-btn>
              <v-btn
                type="submit"
                color="primary"
                rounded="xl"
                class="px-8 font-weight-bold ml-2"
                elevation="2"
              >
                Guardar Cambios
              </v-btn>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.code-textarea :deep(textarea) {
  font-family: 'Fira Code', 'Courier New', Courier, monospace !important;
  font-size: 14px;
  background-color: #0f172a;
  color: #38bdf8;
  padding: 12px;
  border-radius: 8px;
  line-height: 1.5;
}
</style>