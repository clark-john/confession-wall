import { createApp } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import App from './App.vue'

import './globals.scss'

import 'uikit/dist/css/uikit.min.css'

const routes: RouteRecordRaw[] = [
	{ path: '/welcome', component: () => import("./views/Welcome.vue") },
	{ path: '/', redirect: '/welcome'},
	{ path: '/home', component: () => import("./views/Index.vue") },	
	{ path: '/about', component: () => import("./views/About.vue") },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

createApp(App).use(router).mount('#app')
