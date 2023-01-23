<script lang='ts' setup>
import { NCard, NIcon } from 'naive-ui';
import { Globe } from '@vicons/fa';
import chroma from 'chroma-js';

const {
	title,
	color,
	content,
	websiteLink,
	websiteName,
	withWebsite
} = defineProps<{
	title: string,
	color: string,
	content: string,
	websiteLink: string | null,
	websiteName: string | null,
	withWebsite: boolean
}>();
const isDark = chroma(color).hsl()[2] < 0.45;
const changedColor = isDark ? 'white' : 'black';

const NCardStyle = {
	backgroundColor: color,
	'--n-title-text-color': `${changedColor} !important`
};

</script>
<template>
	<n-card
		:title="title"
		:style="NCardStyle"
		:header-style="{ fontSize: '1.5rem', color: changedColor }"
		:content-style="{ fontSize: '1rem', color: changedColor }"
	>
		{{ content }}
		<div
			v-if="withWebsite"
			class="link-item"
			:style="{ color: changedColor }"
		>
			<div class="_link">
				<n-icon>
					<Globe :style="{ filter: `invert(${isDark ? 1 : 0})` }" />
				</n-icon>
				Link:
			</div>
			<a
				:href="
					!websiteLink?.startsWith('http')
						? websiteLink?.replace(websiteLink ?? '', 'https://'.concat((websiteLink ?? '')))
						: websiteLink
				"
				target="_blank"
				class="hover-link"
				:style="{ color: changedColor }"
			>
				{{ websiteName }}
			</a>
		</div>
	</n-card>
</template>

<style lang="scss">
.link-item {
	margin-block: 1rem;
	display: flex;
	gap: 6px;
}

._link {
	display: flex;
	align-items: center;
	gap: 6px;
}

</style>
