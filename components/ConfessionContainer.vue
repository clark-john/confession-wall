<template>
	<div class="container">
		<slot />
	</div>
</template>
<style lang="scss" scoped>
.container {
	display: grid;
	grid-template-columns: repeat(3, 29%);
	gap: 20px;
	justify-content: center;
	margin-block: 1.5rem;
}
</style>
