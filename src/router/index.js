import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Create',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "Create" */ '@/views/Create.vue'),
	},
	{
		path: '/list',
		name: 'List',
		component: () => import(/* webpackChunkName: "List" */ '@/views/List.vue'),
	},
	{
		path: '/list/:id',
		name: 'Detail',
		component: () =>
			import(/* webpackChunkName: "Detail" */ '@/views/Detail.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
