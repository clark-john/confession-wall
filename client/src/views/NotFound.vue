<script setup>
import { onMounted } from "vue"
import { useTitle } from '@vueuse/core'

onMounted(() => {
	useTitle("Not Found")
})

</script>
<template>
	<div class="main">
		<div class="number">404</div>
		<div class="message">Sorry, we can't find the page that you're looking for.</div>
	</div>
</template>
<style scoped lang="scss">
.main {
	text-align: center;
	color: #000;
}
.message {
	color: #000;
	font-size: 1.5rem;
}
html.dark {
	.main {
		color: white;
	}
	.number {
		font-size: 200px;
	}
	.message {
		color: #fff;
	}
}

</style>