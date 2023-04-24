import { createApp } from 'vue'
import App from './App.vue'


import "../node_modules/bootstrap/scss/bootstrap.scss"
import './assets/general.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
