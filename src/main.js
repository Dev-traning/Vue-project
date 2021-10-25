import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import './axios'
import store from './vuex'
import VueSweetalert2 from 'vue-sweetalert2';
 

import './assets/css/style.css';
import './assets/css/feather.css';
import './assets/css/lightbox.css';
import './assets/css/themify-icons.css';
import './assets/js/scripts.js'
import 'sweetalert2/dist/sweetalert2.min.css';
import VueObserveVisibility from 'vue-observe-visibility'
 
Vue.use(VueSweetalert2);
Vue.use(VueObserveVisibility)
Vue.config.productionTip = false



new Vue({
  router,
  store,
 
  render: h => h(App),
}).$mount('#app')
