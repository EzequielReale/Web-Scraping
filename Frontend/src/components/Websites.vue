<script setup>
import { ref, onBeforeMount, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { client } from "../types/ClientAPI";
import { useAuthStore } from "@/stores/userAuthStore.js";

const authStore = useAuthStore();
const user = computed(() => authStore.userData);
const router = useRouter();

const websites = ref([]);
const error = ref(false);
const success = ref(false);

function setWebsites() {
  if (user.value?.sub) {
    client["WebsiteController.find"]().then(
      result => {
        websites.value = result.data.filter(website => website.userId.localeCompare(user.value.sub) === 0);
      },
      () => error.value = true
    );
  }
}

onBeforeMount(() => {
  setWebsites();
});

// Re-run setWebsites if user resolves after mount
watch(user, (newUser) => {
  if (newUser?.sub) {
    setWebsites();
  }
}, { immediate: true });

function editWebsite(website) {
  router.push(`/website/${website.id}/edit`);
}

function deleteWebsite(id) {
  client["WebsiteController.deleteById"](id).then(
    () => {
      setWebsites();
      success.value = true;
    },
    () => error.value = true
  );
}

function seePages(website) {
  router.push(`/website/${website.id}/pages`);
}

function seeErrors(website) {
  router.push(`/website/${website.id}/errors`);
}
</script>

<template>
  <v-container class="py-8 px-6" max-width="1200">
    <div class="d-flex justify-space-between align-center mb-8">
      <div>
        <h1 class="text-h4 font-weight-black text-secondary">
          ¡Hola de nuevo, {{ user?.name }}!
        </h1>
        <p class="text-body-1 text-grey-darken-1 mt-1">
          Aquí tienes el estado de tus sitios web monitoreados.
        </p>
      </div>
      <v-btn
        color="primary"
        rounded="xl"
        prepend-icon="mdi-plus"
        elevation="2"
        to="/website/new"
        class="font-weight-bold"
      >
        Agregar Sitio
      </v-btn>
    </div>

    <!-- Alert for Actions -->
    <v-alert
      v-if="success"
      type="success"
      title="Operación Exitosa"
      text="El sitio web ha sido eliminado correctamente."
      closable
      class="mb-6 rounded-xl"
      @click:close="success = false"
    ></v-alert>

    <v-alert
      v-if="error"
      type="error"
      title="Error"
      text="Hubo un problema al procesar la solicitud."
      closable
      class="mb-6 rounded-xl"
      @click:close="error = false"
    ></v-alert>

    <!-- Loading State / Empty state -->
    <div v-if="websites.length === 0" class="text-center py-12">
      <v-icon size="80" color="grey-lighten-1" class="mb-4">mdi-web-off</v-icon>
      <h3 class="text-h5 text-grey-darken-2 font-weight-bold">Aún no tienes sitios web</h3>
      <p class="text-body-1 text-grey-darken-1 mt-2 mb-6">
        ¿Por qué no empiezas agregando uno para comenzar el scraping?
      </p>
      <v-btn color="primary" rounded="xl" to="/website/new" size="large" class="font-weight-bold">
        Agregar Mi Primer Sitio
      </v-btn>
    </div>

    <!-- Grid of Websites -->
    <v-row v-else>
      <v-col
        v-for="website in websites"
        :key="website.id"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="rounded-xl h-100 pa-4 border-light" variant="flat" border>
          <div class="d-flex align-center mb-3">
            <v-avatar color="primary-lighten-5" size="48" class="mr-3">
              <v-icon color="primary" size="24">mdi-web</v-icon>
            </v-avatar>
            <div class="overflow-hidden">
              <h3 class="text-h6 font-weight-bold text-secondary text-truncate" :title="website.name">
                {{ website.name }}
              </h3>
              <a
                :href="website.url"
                target="_blank"
                class="text-caption text-primary text-decoration-none d-flex align-center mt-n1"
              >
                <span class="text-truncate" style="max-width: 180px;">{{ website.url }}</span>
                <v-icon size="10" class="ml-1">mdi-open-in-new</v-icon>
              </a>
            </div>
          </div>

          <v-divider class="my-3 opacity-50"></v-divider>

          <!-- Metrics / Config -->
          <v-row dense class="mb-4">
            <v-col cols="6">
              <div class="text-caption text-grey-darken-1">Frecuencia</div>
              <v-chip size="small" color="info" variant="tonal" class="font-weight-bold mt-1">
                <v-icon start size="14">mdi-clock-outline</v-icon>
                Cada {{ website.frequency }}s
              </v-chip>
            </v-col>
            <v-col cols="6">
              <div class="text-caption text-grey-darken-1">Profundidad</div>
              <v-chip size="small" color="success" variant="tonal" class="font-weight-bold mt-1">
                <v-icon start size="14">mdi-file-tree</v-icon>
                {{ website.pageLevels }} {{ website.pageLevels === 1 ? 'nivel' : 'niveles' }}
              </v-chip>
            </v-col>
          </v-row>

          <v-divider class="my-3 opacity-50"></v-divider>

          <!-- Actions -->
          <div class="d-flex justify-space-between align-center mt-4">
            <div>
              <v-btn
                variant="text"
                color="primary"
                size="small"
                class="px-2 font-weight-bold"
                prepend-icon="mdi-file-document-outline"
                @click="seePages(website)"
              >
                Datos
              </v-btn>
              <v-btn
                variant="text"
                color="error"
                size="small"
                class="px-2 font-weight-bold ml-1"
                prepend-icon="mdi-alert-circle-outline"
                @click="seeErrors(website)"
              >
                Errores
              </v-btn>
            </div>
            <div class="d-flex">
              <v-btn
                icon="mdi-pencil-outline"
                variant="text"
                color="grey-darken-1"
                size="small"
                title="Editar"
                @click="editWebsite(website)"
              ></v-btn>
              <v-btn
                icon="mdi-trash-can-outline"
                variant="text"
                color="error"
                size="small"
                title="Eliminar"
                @click="deleteWebsite(website.id)"
              ></v-btn>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
