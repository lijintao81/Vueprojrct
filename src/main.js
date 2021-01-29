import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import HilleWorld from '@/components/HilleWorld.vue'
Vue.component('HilleWorld', HilleWorld)

Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import './assets/css/main.css'

// 导入js-cookie插件 并且注册到VUE的原型中 以后可以通过VUE实例的 this直接访问$jsCookie
import Cookies from 'js-cookie'
Vue.prototype.$jsCookie = Cookies


// 新建VUE的实例 bus作为事件总线  将bus注册到VUE的原型中  以后再VUE的实例中就可以直接使用this.$bus
let bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')





