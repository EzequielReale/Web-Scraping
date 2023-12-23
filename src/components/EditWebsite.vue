<script>
import WebsiteService from '../services/WebsiteService';

export default {
    data() {
        return {
            website: {
                name: '',
                url: '',
                pageLevels: 0,
                frequency: 0,
                snippet: '',
            },
        };
    },
    created() {
        // Carga los datos del sitio web para editar
        const websiteId = this.$route.params.id;

        WebsiteService.getWebsite(websiteId)
            .then((website) => {
                this.website = {
                    name: website.name,
                    url: website.url,
                    pageLevels: website.pageLevels,
                    frequency: Number(website.frequency),
                    snippet: website.snippet,
                };
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },
    methods: {
        editWebsite() {
            // Validación de campos
            if (!this.website.name || !this.website.url || this.website.pageLevels <= 0 || this.website.pageLevels > 99 || this.website.frequency < 1 || !this.website.snippet) {
                return alert('Debe llenar todos los campos correctamente');
            }

            // Crea un objeto con los datos editados del sitio web
            const updatedWebsite = {
                id: this.$route.params.id,
                name: this.website.name,
                url: this.website.url,
                pageLevels: this.website.pageLevels,
                frequency: this.website.frequency,
                snippet: this.website.snippet,
            };

            // Llama al servicio para actualizar el sitio web
            WebsiteService.updateWebsite(updatedWebsite)
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
            <v-btn class="mr-2" @click="$router.push('/websites')" color="error">Cancelar</v-btn>
        </v-form>
    </v-container>
</template>
  