import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import router from './router'
import store from './store/store'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
