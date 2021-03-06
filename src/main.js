// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iview from 'iview'
import request from './common/HttpUtil'
import store from './store'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.prototype.$http = request
Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // base: '/bsmis',
  mode: 'history',
  store,
  router,
  components: { App },
  template: '<App/>'
})
