import "@/styles/_main.scss";


import Vue from 'vue'
import App from './App.vue'

import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
  data: {
    elem: '',
    classToggle: ''
  }
}
).$mount('#app')



