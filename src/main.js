import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createVuetify} from 'vuetify'

import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

const vuetify = createVuetify({
    components,
    directives,
})


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
