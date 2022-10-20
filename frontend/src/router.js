import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import StartTest from './pages/StartTest.vue'
import TestResults from './pages/TestResults.vue'

const router = createRouter({
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/test', component: StartTest },
		{ path: '/result', component: TestResults },
	],
	history: createWebHistory(),
})

export default router
