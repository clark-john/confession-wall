<script lang="ts" setup>
import '@/styles/about.scss'
import { onMounted } from "vue"
import { useTitle } from '@vueuse/core'

onMounted(() => {
	useTitle("About")
})

</script>

<template>
	<div class="about-main">
		<h3 class="about-title">About Confession Wall</h3>
		<div class="content">
			Personal project
			<div>Stack: </div>
			<div class="stack">
				<!-- still an advantage to use <li> without <ol> or <ul> -->
				<div>
					<li>Prisma</li>
					<li>Vite</li>
					<li>SCSS</li>
					<li>Vue</li>
				</div>
			</div>
			<div style="margin-bottom: 2rem;">
				Email: <a href="mailto:daprogrammer1@gmail.com">Clark</a>
			</div>
			<div>
				Back to <router-link to="/home" class="no-underline">Confession Wall</router-link>
			</div>
		</div>
	</div>
</template>
