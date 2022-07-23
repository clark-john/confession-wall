<template>
  <div class="main" :style="confessionCardStyles">
    <h3>Title</h3>
    <div>
      Message na haba na ewan basta kung ano pede mo ilagay di2
    </div>
  </div>
</template>
<script lang="ts">
import '@/styles/confession.css'
import { defineComponent } from "vue";

const r = Math.floor((Math.random() * 195) + 60)
const g = Math.floor((Math.random() * 195) + 60)
const b = Math.floor((Math.random() * 195) + 60)

export default defineComponent({
  props: {
    title: String,
    message: String,
    color: String
  },
  name: "Confession",
  setup(){
  },
  data(){
    return {
      confessionCardStyles: {
        backgroundColor: `rgb(${r},${g},${b})`
      }
    }
  }
})
</script>