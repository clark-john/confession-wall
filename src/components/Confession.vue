<template>
  <div class="main" :style="confessionCardStyles">
    <h3 :style="titleStyle">Title</h3>
    <div>
      Message na haba na ewan basta kung ano pede mo ilagay di2
    </div>
  </div>
</template>
<script lang="ts">
import '@/styles/confession.scss'
import { defineComponent } from "vue";
import chroma from 'chroma-js'

const randomColor = chroma.random()
const stringColor: string = randomColor.toString()

export default defineComponent({
  props: {
    title: String,
    message: String,
    color: String
  },
  name: "Confession",
  created(){
  },
  data(){
    return {
      confessionCardStyles: {
        backgroundColor: stringColor,  //`rgb(${r},${g},${b})`,
        color: this.checkLightness(randomColor.hsl()[2])
      },
      titleStyle: {
        color: this.checkLightness(randomColor.hsl()[2])
      }
    }
  },
  methods: {
    checkLightness(int: number) {
      if (int < 0.5) {
        return "white"
      } else {
        return "black"
      }
    }
  }
})
</script>