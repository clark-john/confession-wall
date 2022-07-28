<template>
  <div id="modal-create" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Create Confession</h2>
      <form @submit="testing">
        <div class="input">
          <label for="title" class="input-label">Title</label>
          <input type="text" class="uk-input" name="title" v-model="title" required>           
        </div>
        <div class="input">
          <label for="content" class="input-label">Content</label>
          <textarea name="content" maxlength="2000" rows="10" class="uk-textarea" v-model="content" required />
        </div>
        <div class="input-checkbox">
          <input type="checkbox" name="withWebsteLink" v-model="withWebsteLink" @change="disableOptionalInputs">
          <label for="withWebsteLink">With website link?</label>
        </div>
        <div class="input">
          <label for="websiteName" class="input-label" >Website Name</label>
          <input type="text" class="uk-input optional" name="websiteName" disabled>           
        </div>
        <div class="input">
          <label for="websiteLink" class="input-label" >Website Link</label>
          <input type="text" class="uk-input optional" name="websiteLink" disabled>           
        </div>
        <button type="submit">Create Confession</button>
      </form> 
    </div>
  </div>
</template>

<script lang="ts">
import '@/styles/modal.scss'
import { defineComponent } from "vue";
import UIkit from 'uikit'
import { ConfessionManager } from '@/utils/ConfessionManager'

export function openModal() {
  UIkit.modal("#modal-create").show()
}

export default defineComponent({
  name: "Modal",
  data(){
    return {
      title: "",
      content: "",
      withWebsteLink: false,
      websiteName: null,
      websiteLink: null,
      confessMan: new ConfessionManager()
    }
  },
  created(){
    this.disableOptionalInputs()
  },
  methods: {
    backToDefault() {
      this.title = ""
      this.content = ""
      this.withWebsteLink = false
      this.websiteLink = null
    },
    async testing(e: any){
      alert(this.title)
      alert(this.content)
      alert(this.withWebsteLink)
      e.preventDefault()
      UIkit.modal("#modal-create").hide()
      this.backToDefault()
    },
    disableOptionalInputs(){
      const nodes = document.querySelectorAll(".optional")
      if (!this.withWebsteLink) {
        nodes.forEach(x => {
          x.setAttribute("disabled", "")
        })                
      } else {
        nodes.forEach(x => {
          x.removeAttribute("disabled")
        })                        
      }
    }
  }
})
</script>
