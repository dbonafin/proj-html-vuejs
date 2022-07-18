import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
library.add(
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faYoutube,
  faLocationDot,
  faPhoneFlip,
  faChevronRight,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
