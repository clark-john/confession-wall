<script lang="ts" setup>
const { name, alt, image, width } = defineProps<{
	name: string,
	alt: string,
	image: any,
	width?: number
}>();
</script>

<template>
	<div class="item">
		<img :src="image" :alt="alt" :width="width ?? 30">
		<div>{{ name }}</div>
	</div>
</template>

<style lang="scss" setup>
.item {
	display: flex;
	justify-content: center;
	gap: 12px;
	align-items: center;
	padding: 10px 8px;
}
</style>
