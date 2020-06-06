import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Create',
		component: Create,
	},
	{
		path: '/list',
		name: 'List',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/List.vue'),
	},
	{
		path: '/list/:id',
		name: 'Detail',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '@/views/Detail.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
