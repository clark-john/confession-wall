<script lang='ts' setup>
import './styles/styles.scss';

useHead({
	titleTemplate: (text?: string) => `${text || 'Home'} - Confession Wall`
});
</script>
<template>
	<div class="root">
		<Navbar />
		<router-view />
	</div>
</template>

<style scoped>
div.root {
	height: 100%;
}
</style>
