<script setup lang="ts">
import { defineComponent } from 'vue';
import Confession from '@/components/Confession.vue';
import ConfessionsContainer from '../components/ConfessionsContainer.vue';
</script>

<template>	
	<div>
		<ConfessionsContainer>
			<div v-for="x in new Array(30)">
				<Confession />
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