<template>
  <transition name="wrong-url">
    <div id="InputPanel">
      <input v-model="InputValue" type="text" 
          placeholder="Paste long url and shorten it">
      <button @click="SubmitUrl">
          Shorten
      </button>
    </div>
  </transition>
</template>

<script>
import RegexChecker from '../utils/UrlRegexChecker.js'

export default {
  data() {
    return {
      InputValue: ""
    }
  },
  methods: {
    SubmitUrl() {
      if(!RegexChecker(this.InputValue)) {
        const Input = document.querySelector("input")
        document.getElementById("InputPanel").classList.add("wrong-url")

        Input.setAttribute("placeholder", "Wrong url")
        Input.style.color = "red"

        setTimeout(() => 
        { 
          Input.setAttribute("placeholder", "Paste long url and shorten it"),
          Input.style.color = "white",
          document.getElementById("InputPanel").classList.remove("wrong-url")
        }, 2200)
      }
      else
      {
        this.$emit('shorted', this.InputValue)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/Styles/InputPanelStyles.scss';
</style>