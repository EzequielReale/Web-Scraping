<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

const handleLogout = () =>
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
    });
</script>
   
   
<template>
    <v-btn icon @click="handleLogout"><v-icon>mdi-logout</v-icon></v-btn>
</template>
   
   