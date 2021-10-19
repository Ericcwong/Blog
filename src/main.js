import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionApi from "@vue/composition-api"
//Styling
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import VideoBackground from 'vue-responsive-video-background-player'
import {
  Plugin
} from 'vue-responsive-video-background-player'
import "animate.css"
Vue.component('video-background', VideoBackground);
Vue.use(Plugin);
library.add(faEnvelope, faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import "./assets/style.css"
//End of Styling


Vue.config.productionTip = false
Vue.use(VueCompositionApi)
new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')