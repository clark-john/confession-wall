<template>
  <div id="modal-create" uk-modal>
    <div class="uk-modal-dialog uk-modal-body">
      <h2 class="uk-modal-title">Create Confession</h2>
      <form @submit="submitForm">
        <div class="input">
          <label for="title" class="input-label">Title</label>
          <input 
            type="text" 
            class="uk-input" 
            name="title" 
            v-model="title" 
            @blur="validateTitle" 
            placeholder="Title"
          >          
          <span class="error">{{ titleRequired }} </span>
        </div>
        <div class="input">
          <label for="content" class="input-label">Content</label>
          <textarea 
            name="content" 
            maxlength="500" 
            rows="10" 
            class="uk-textarea" 
            v-model="content" 
            placeholder="Content" 
            @blur="validateContent" 
          />
          <span class="error">{{ contentRequired }} </span>
        </div>
        <div class="input-checkbox">
          <input type="checkbox" name="withWebsteLink" v-model="withWebsteLink" @change="disableOptionalInputs">
          <label for="withWebsteLink">With website link?</label>
        </div>
        <div class="input">
          <label for="websiteName" class="input-label">Website Name</label>
          <input type="text" class="uk-input optional" name="websiteName" disabled required placeholder="Put your website name" v-model="websiteName">           
        </div>
        <div class="input">
          <label for="websiteLink" class="input-label">Website Link</label>
          <input type="text" class="uk-input optional" name="websiteLink" disabled required placeholder="Put your website link" v-model="websiteLink">
          <span class="error"> {{ linkOnError }} </span>           
        </div>
        <button type="submit"> {{ !isCreating ? "Create Confession" : "Creating..." }} </button>
      </form> 
    </div>
  </div>
</template>

<script lang="ts">
import '@/styles/modal.scss'
import { defineComponent } from "vue";
import UIkit from 'uikit'
import { containsOnlySpaces } from "@/utils/containsOnlySpaces"
import { createConfession } from "@/utils/createConfession"
import { randomColor } from '@/utils/randomColor'

export function openModal() {
  UIkit.modal("#modal-create").show()
  // @ts-ignore
  document.querySelector("#modal-create").scrollTo(0,0)
  // @ts-ignore
  document.querySelector("[type='checkbox']").checked =false

  const nodes = document.querySelectorAll(".optional")
  nodes.forEach(x => {
    x.setAttribute("disabled", "")
  })                
}

export default defineComponent({
  name: "Modal",
  data(){
    return {
      title: "",
      content: "",
      withWebsteLink: false,
      websiteName: "",
      websiteLink: "",
      titleRequired: "",
      contentRequired: "",
      isLinkValidated: false,
      linkOnError: "",
      isCreating: false
    }
  },
  methods: {
    backToDefault() {
      this.title = ""
      this.content = ""
      this.withWebsteLink = false
      this.websiteLink = ""
    },
    validateTitle(){
      if (this.title == "") {
        this.titleRequired = "Title is required"
      } else if (containsOnlySpaces(this.title)) {
        this.titleRequired = "Cannot contain only spaces"
      } else {
        this.titleRequired = ""
      }
    },
    validateContent(){
      if (this.content == "") {
        this.contentRequired = "Content is required"
      } else if (containsOnlySpaces(this.content)) {
        this.contentRequired = "Cannot contain only spaces"
      } else {
        this.contentRequired = ""
      }
    },
    async submitForm(e: any){
      e.preventDefault()
      this.isCreating = true
      if ((this?.title != "" && !containsOnlySpaces(this.title)) && (this.content != "" && !containsOnlySpaces(this.content))) {      
        if (this.withWebsteLink) {
          await createConfession({
            title: this.title,
            content: this.content,
            color: randomColor(),
            withWebsteLink: this.withWebsteLink,
            websiteName: this.websiteName,
            websiteLink: this.websiteLink
          })
        } else {        
          await createConfession({
            title: this.title,
            content: this.content,
            color: randomColor(),
            withWebsteLink: this.withWebsteLink
          })
        }
        this.isCreating = false
        UIkit.modal("#modal-create").hide()
      } else {
        this.validateTitle()
        this.validateContent()
      }
      this.backToDefault()
    },
    disableOptionalInputs(){
      const nodes = document.querySelectorAll(".optional")
      if (!this?.withWebsteLink) {
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
