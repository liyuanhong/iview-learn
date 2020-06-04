import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//const hostname = document.location.hostname
const host = document.location.host
console.log(host)
axios.defaults.baseURL = "http://" + host;
Vue.prototype.$http = axios


Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
