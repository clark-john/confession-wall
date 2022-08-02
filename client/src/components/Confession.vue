<template>
  <div class="main" :style="confessionCardStyles">
    <h3 :style="titleStyle">{{title}}</h3>
    <div>
      {{ content }}
    </div>
    <a :href="websiteLink" :style="titleStyle" target="_blank" v-if="withWebsteLink" class="website-link">
      <img :src="globeSvg" alt="globe">
       {{ websiteName }}
    </a>
  </div>
</template>

<script lang="ts">
import '@/styles/confession.scss'
import { defineComponent } from "vue"
import globeSvg from '../assets/globe.svg'
import chroma from 'chroma-js'

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
      confessionCardStyles: {
        backgroundColor: this.color, 
        // @ts-ignore
        color: this.checkLightness(chroma(this.color).hsl()[2]).color
      },
      titleStyle: {
        // @ts-ignore
        color: this.checkLightness(chroma(this.color).hsl()[2]).color
      },
      globeSvg,
    }
  },
  methods: {
    checkLightness(int: number) {
      if (int < 0.4) {
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