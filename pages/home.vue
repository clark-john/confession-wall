<script lang="ts" setup>
import { NSpin } from 'naive-ui';

const { data, pending, error, refresh } = useLazyFetch("/api/confessions");

window.addEventListener("reloadConfessions", () => {
	refresh().then(() => {
		console.log("Confessions refreshed");
	});
});
</script>

<template>
	<Transition name="fading">
		<div v-if="pending" class="loading">
			<n-spin />
			Loading confessions...
		</div>
		<div v-else-if="error">
			An error occurred
		</div>
		<ConfessionContainer v-else>
			<Confession
				v-for="{
					title,
					color,
					content,
					websiteLink,
					websiteName,
					withWebsite
				}, i in data?.confessions"
				:key="i"
				:title="title"
				:content="content"
				:color="color"
				:with-website="withWebsite"
				:website-name="websiteName"
				:website-link="websiteLink"
			/>
		</ConfessionContainer>
	</Transition>
</template>

<style scoped>

.fading-enter-active,
.fading-leave-active {
	transition: all 200ms;
}

.fading-enter-from,
.fading-leave-to {
	opacity: 0;
	translate: 0 10px;
}

.loading {
	display: grid;
	gap: 1rem;
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -100%;
}
</style>
