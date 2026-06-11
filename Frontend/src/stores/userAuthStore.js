import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', {
    state: () => ({ token: null, userData: null, gsiInitialized: false }),
    getters: {
        getToken: (state) => state.token,
        getUserData: (state) => state.userData,
        isAuthenticated: (state) => state.token != null,
        isGsiInitialized: (state) => state.gsiInitialized
    },
    actions: {
        login(token, userObject) {
            this.token = token
            this.userData = userObject
        },
        logout() {
            this.token = null
            this.userData = null
        },
        setGsiInitialized(value) {
            this.gsiInitialized = value
        }
    }
})