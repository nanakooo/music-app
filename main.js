import Vue from 'vue'
import App from './App'
import { myRequest } from './util/api.js'
import uView from "uview-ui";

Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView);
const app = new Vue({
    ...App
})
app.$mount()
