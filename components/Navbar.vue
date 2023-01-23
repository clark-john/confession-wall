<script lang="ts" setup>
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { NButton } from 'naive-ui';

const router = useRouter();
const path = ref<string>(window.location.pathname);
const isOpen = ref<boolean>(false);

router.beforeEach((
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) => {
	path.value = to.path;
	next();
});

</script>

<template>
	<div class="navbar">
		<NuxtLink
			class="title"
			:to="path !== '/welcome' ? '/home' : '/welcome'"
		>
			Confession Wall
		</NuxtLink>
		<NuxtLink
			v-if="path !== '/welcome'"
			to="/about"
			class="hover-link"
		>
			About
		</NuxtLink>
		<n-button
			type="info"
			:style="{
				visibility: path !== '/about' && path !== '/welcome' ? 'visible' : 'hidden'
			}"
			@click="isOpen = true"
		>
			Create
		</n-button>
	</div>
	<ConfessModal :show="isOpen" @close="isOpen = false" />
</template>

<style scoped lang="scss">
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 1.25rem 9rem;
	.title {
		font-size: 1.5rem;
		font-weight: bold;
	}
}
</style>
