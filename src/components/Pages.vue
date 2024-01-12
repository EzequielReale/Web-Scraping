<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { client } from "../types/ClientAPI";

const route = useRoute();
const router = useRouter();

const websiteInfo = ref({});
const pages = ref({})
const copyOfPages = ref({})

function getPagesByWebsiteId(websiteId) {
    return client["WebsitePageController.find"](websiteId)
        .then(result => result.data)
        .catch(error => {
            console.error("Error fetching pages:", error);
        });
}

function getWebsiteInfo(websiteId) {
    return client["WebsiteController.findById"](websiteId)
        .then(result => {
            websiteInfo.value = result.data;
        })
        .catch(error => {
            console.error("Error fetching website:", error);
        });
}

onBeforeMount(() => {
    getWebsiteInfo(route.params.id);
    getPagesByWebsiteId(route.params.id).then(
        result => {
            pages.value = result,
            copyOfPages.value = result
        })
});

function visitPage(url) {
    window.open(url, "_blank");
}

function filterByName(string) {
    let filteredPages = copyOfPages.value.filter(page => {
        const title = page.doc.title ? page.doc.title.toLowerCase() : '';
        const body = page.doc.body ? page.doc.body.toLowerCase() : '';

        return page.doc.url.toLowerCase().includes(string.toLowerCase()) || title.includes(string.toLowerCase()) || body.includes(string.toLowerCase());
    });
    pages.value = filteredPages;
}

function resetFilter() {
    pages.value = copyOfPages.value;
}

</script>

<template>
    <v-container fluid class="align-center justify-center" style="width: 90vh;">

        <v-row class="mb-4">
            <v-col cols="6">
                <v-text-field v-model="search" label="Buscar" append-icon="mdi-magnify"
                    @click:append="filterByName(search)"></v-text-field>
            </v-col>

            <v-col cols="1">
                <v-btn @click="resetFilter"><v-icon>mdi-refresh</v-icon></v-btn>
            </v-col>
        </v-row>

        <h1 class="display-2 mb-4">Páginas del sitio {{ websiteInfo.name }}:</h1>
        <v-sheet width="1100" class="mx-auto">
            <v-list>
                <v-list-item-group v-if="pages.length > 0">
                    <v-list-item v-for="page in pages" :key="page.id" class="website-list-item">
                        <v-list-item-icon>
                            <v-icon>mdi-spider-web</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="headline font-weight-bold">{{ websiteInfo.name }}</v-list-item-title>
                            <v-list-item-subtitle class="caption">{{ page.doc.url }}</v-list-item-subtitle>
                            <v-list-item-text class="caption">{{ page.doc.title }}</v-list-item-text>
                        </v-list-item-content>
                        <div>
                            <v-btn @click="visitPage(page.doc.url)" color="primary">
                                Visitar <v-icon>mdi-search-web</v-icon>
                            </v-btn>
                        </div>

                    </v-list-item>
                </v-list-item-group>
                <v-list-item v-else>
                    <v-list-item-content>
                        <v-list-item-title class="headline font-weight-bold">Lo sentimos, no hay visitas para
                            mostrarte<v-icon>mdi-emoticon-cry-outline</v-icon></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-container>
</template>

<style scoped>
.website-list-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
}

.headline {
    font-size: 24px;
    color: #333;
}
</style>