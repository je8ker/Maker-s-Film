//main.js

import { createApp } from 'vue'
import App from './App.vue'

import router from './router';


//UI
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import vuetify from './plugins/vuetify'



loadFonts()

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');