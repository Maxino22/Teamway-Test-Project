import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import StartTest from './pages/StartTest.vue'

const router = createRouter({
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/test', component: StartTest },
	],
	history: createWebHistory(),
})

export default router
