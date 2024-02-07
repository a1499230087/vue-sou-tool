import Vue from 'vue'
import App from './App.vue'
import tool, { souFile } from '../packages'
Vue.config.productionTip = false
console.log(tool);

Vue.use(tool)
Vue.use(souFile)
new Vue({
  render: h => h(App),
}).$mount('#app')
