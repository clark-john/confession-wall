<script setup lang="ts">
import { defineComponent } from 'vue';
import Confession from '@/components/Confession.vue';
import ConfessionsContainer from '../components/ConfessionsContainer.vue';
</script>

<template>	
	<div>
		<ConfessionsContainer>
			<Confession title="Clark" content="Ibig kong kumanta ng kundiman :D" :withWebsteLink="true" websiteName="Clark" websiteLink="https://clark-john.github.io" />
			<div v-for="x in new Array(41)">
				<Confession title="clark lng sakalam" content="sdakmflsnjnmdjksdnj" />
			</div>				
		</ConfessionsContainer>
	</div>
</template>

<script lang="ts">
export default defineComponent({
	methods: {
	}
})
</script>