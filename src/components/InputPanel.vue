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
          document.getElementById("InputPanel").classList.remove("wrong-url")
        }, 2200)
      }
      else
      {
        this.$emit('shorted')
        console.log("shorted")
      }
    }
  }
}
</script>

<style lang="scss">
@import '../Styles/InputPanelStyles.scss';

.wrong-url {
  animation: wrongUrlAnimation 1s forwards;

  input {

    &::placeholder {
    color: red;
  }
  }
}

@keyframes wrongUrlAnimation {
  20% {
    transform: translateX(3vw);
  }
  35% {
    transform: translateX(-3vw);
  }
  45% {
    transform: translateX(3vw);
  }
  60% {
    transform: translateX(-3vw);
  }
  75% {
    transform: translateX(3vw);
  }
  90% {
    transform: translateX(0);
  }
}
</style>