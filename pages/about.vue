<script setup lang="ts">
import { h } from 'vue';
import { Envelope } from '@vicons/fa';
import { NButton } from 'naive-ui';
import nuxt from 'assets/nuxt.svg';
import prisma from 'assets/prisma.svg';
import naiveui from 'assets/naive-ui.svg';

const stack: StackItem[] = [
	{
		name: "Nuxt",
		alt: "nuxt",
		image: nuxt,
		width: 40
	},
	{
		name: "Prisma",
		alt: "prisma",
		image: prisma
	},
	{
		name: "Naive UI",
		alt: "naive ui",
		image: naiveui
	}
];

function openEmail() {
	document.location.href = "mailto:mjohncl4rk@gmail.com";
}

useHead({
	title: "About"
});

</script>
<template>
	<div class="main">
		<div class="about">About Confession Wall</div>
		<div>Personal project</div>
		<div>Stack used:</div>
		<div class="stack">
			<StackItem
				v-for="x, i in stack"
				:key="i"
				:image="x.image"
				:alt="x.alt"
				:name="x.name"
				:width="x.width"
			/>
		</div>
		<n-button
			class="button"
			:render-icon="() => h(Envelope)"
			type="primary"
			@click="openEmail"
		>
			Email me
		</n-button>
		<div class="back-to">
			Back to <NuxtLink to="/home">Confession Wall</NuxtLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../styles/animations' as an;

.main {
	text-align: center;
	margin-block: 2.5rem;
	.about {
		font-size: 1.5rem;
		margin-block: 1.5rem;
	}
	.button {
		margin-block: 2rem;
	}
	.link-to {
		margin-block: 1rem;
	}
}

a {
	color: #0071df;
	@include an.onhover-link(#0071df);
	text-decoration: none;
}

</style>
