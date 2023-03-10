import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './axios'
import store from './vuex'
import VueSweetalert2 from 'vue-sweetalert2';
import { library} from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import './assets/css/style.css';
import './assets/css/feather.css';
import './assets/css/lightbox.css';
import './assets/css/themify-icons.css';
import './assets/js/scripts.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import VueObserveVisibility from 'vue-observe-visibility'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
Vue.use(VueSweetalert2);
Vue.use(VueObserveVisibility)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faCircleCheck, faCircleXmark)



new Vue({
  router,
  store,
 
  render: h => h(App),
})

// .component('fa',FontAwesomeIcon)x
.$mount('#app')
