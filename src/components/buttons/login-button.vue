<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: "/",
        },
    });
};
</script>

   
<template>
    <v-btn icon @click="handleLogin"><v-icon>mdi-login</v-icon></v-btn>
</template>