import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// intialize vue-font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
