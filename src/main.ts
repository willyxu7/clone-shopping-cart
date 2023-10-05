import Vue from 'vue'

import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import './assets/main.css'
import {createPinia, PiniaVuePlugin} from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  router,
  render: (h) => h(App),
  pinia
}).$mount('#app')
