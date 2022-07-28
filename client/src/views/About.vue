<script lang="ts" setup>
import { defineComponent } from "vue";
import '@/styles/about.scss'
</script>

<template>
	<div class="main">
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
			<div>
				Back to <router-link to="/home" class="no-underline">Confession Wall</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	created(){
		document.title = "About - Confession Wall"
	}
})
</script>