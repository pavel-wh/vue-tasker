import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	beforeCreate() {
		this.$store.commit('initialStore')
	},
	render: h => h(App),
}).$mount('#app')
