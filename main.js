import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RestApi from './prototype/RestAPI.js'
import Constant from './prototype/Constant.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.prototype.$restApi = new RestApi();
Vue.prototype.$constant = new Constant();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
