<template>
  <div class="main" :style="confessionCardStyles">
    <h3 :style="titleStyle">{{title}}</h3>
    <div>
      {{ content }}
    </div>
    <div v-if="withWebsteLink" class="website-link">
      <img :src="globeSvg" alt="" :class="checkLightness(randomColor).isDark ? 'invert' : 'uninvert'">
      <a :href="websiteLink" :style="titleStyle" target="_blank"> {{ websiteName }} </a>
    </div>
  </div>
</template>

<script lang="ts">
import '@/styles/confession.scss'
import { defineComponent } from "vue"
import globeSvg from '../assets/globe.svg'
import chroma from 'chroma-js'

const randomColor = chroma.random()
const stringColor: string = randomColor.toString()

export default defineComponent({
  props: {
    title: String,
    content: String,
    color: String,
    withWebsteLink: Boolean,
    websiteName: String,
    websiteLink: String
  },
  name: "Confession",
  data(){
    return {
      randomColor: randomColor.hsl()[2],
      confessionCardStyles: {
        backgroundColor: stringColor,  //`rgb(${r},${g},${b})`,
        color: this.checkLightness(randomColor.hsl()[2]).color
      },
      titleStyle: {
        color: this.checkLightness(randomColor.hsl()[2]).color
      },
      globeSvg,
    }
  },
  methods: {
    checkLightness(int: number) {
      if (int < 0.5) {
        return {
          color: "white",
          isDark: true
        }
      } else {
        return {
          color: "black",
          isDark: false
        }
      }
    }
  }
})
</script>