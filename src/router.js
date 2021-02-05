import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		}, {
			path: '/cart',
			component: () => import('./views/cart.vue')
		}, {
			path: '/delivery',
			component: () => import('./views/textPage.vue')
		}, {
			path: '*',
			component: () => import('./views/notFound.vue')
		}
	]
})
