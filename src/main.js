import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import "../node_modules/bootstrap/scss/bootstrap.scss"
import './assets/general.scss'

createApp(App).use(store).mount('#app')
