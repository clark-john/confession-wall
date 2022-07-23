<template>
	<div>
		welcome
		proceed to 
		<router-link to="/home">confession wall</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	created(){
		document.title = "Welcome - Confession Wall"
	}
})
</script>