import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from '../src/vuex/store';

Vue.config.productionTip = false
window.host = "https://www.mocky.io/";


new Vue({
  vuetify,store,
  render: h => h(App)
}).$mount('#app')

