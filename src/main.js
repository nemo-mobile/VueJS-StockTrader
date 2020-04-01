import Vue from 'vue'
import App from './App.vue'

<<<<<<< HEAD
import './plugins/axios'

import vuetify from './plugins/vuetify';
import router from './router'
import store from './store/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
=======
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store/store'
>>>>>>> 93f30c551483451f143c2c3d1fe9b547fe5de6a9

Vue.config.productionTip = false
Vue.filter('currency', value => {
  return `R$ ${value.toLocaleString()}`
})

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
