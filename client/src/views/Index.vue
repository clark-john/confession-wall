<script setup lang="ts">
import Confession from '@/components/Confession.vue';
import ConfessionsContainer from '../components/ConfessionsContainer.vue';
import { getConfessions } from '@/utils/getConfessions' 
import { useTitle } from '@vueuse/core'
import { ref, onMounted } from 'vue'

let confessions: any = ref(new Array())
onMounted(async () => {
	useTitle("Confession Wall")
	confessions.value = (await getConfessions()).reverse()
})
</script>

<template>	
	<div>
		<ConfessionsContainer>
			<div v-for="x in confessions">
				<Confession 
					:title="x.title" 
					:content="x.content" 
					:color="x.color"
					:withWebsteLink="x.withWebsteLink" 
					:websiteName="x.websiteName" 
					:websiteLink="x.websiteLink" 
				/>
			</div>
		</ConfessionsContainer>
	</div>
</template>