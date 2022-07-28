<script setup lang="ts">
import { defineComponent } from 'vue';
import Modal from './Modal.vue';

import '@/styles/navbar.scss'

</script>

<template>
	<div class="nav">
		<router-link to="/" class="link"><div class="h2">Confession Wall</div></router-link>
		<router-link to="/about" class="about link" v-if="// @ts-ignore
		this.$route.fullPath != '/welcome'">About</router-link>
		<div class="nav-right">
			<button class="create" @click="showModal" v-if="// @ts-ignore
			this?.$route.fullPath != '/welcome'">Create</button>
			<button @click="switchTheme" class="switch-theme">
				{{ !isDark ? "Dark" : "Light" }}
			</button>
		</div>
		<Modal />
	</div>
</template>

<script lang="ts">
import { saveTheme, getTheme } from '@/utils/themeLocalStorage'
import { openModal } from './Modal.vue'

export default defineComponent({
	name: "Navbar",
	created(){
		if (this.isDark) {
			this.body?.classList.add("dark")
		}
		window.addEventListener('unload', () => {
			saveTheme(this.isDark as boolean)
		})
	},
	data() {
		return {
			isDark: getTheme() == null ? false : getTheme(),
			body: document.querySelector("html")
		}
	},
	methods: {
		showModal(){
			openModal()
		},
		switchTheme(){
			const el = this.body
			if (!this.isDark) {
				this.isDark = !this.isDark
				el?.classList.add("dark")
			} else {
				this.isDark = !this.isDark
				el?.classList.remove("dark")
			}
		}
	}
})
</script>
