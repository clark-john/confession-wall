<script lang="ts" setup>
import { NButton } from 'naive-ui';

const router = useRouter();
function goToHome() {
	router.push("/home");
}

useHead({
	title: "Welcome"
});
</script>

<template>
	<div>
		<div style="font-weight: bold;">Welcome to Confession Wall</div>
		<n-button
			type="primary"
			strong
			color="#E2E8F0"
			text-color="black"
			@click="goToHome"
		>
			Create yours now
		</n-button>
	</div>
</template>

<style scoped>
div {
	display: grid;
	place-items: center;
}
</style>
