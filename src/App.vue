<template>
  <main>
    <div id="MainTextSpace">
      <transition name="maintext" appear>
        <MainText />
      </transition>
    </div>
    <div id="InputPanelSpace">
      <transition name="input-panel" appear>
        <InputPanel />
      </transition>
    </div>
  </main>
</template>

<script>
import MainText from './components/MainText.vue'
import InputPanel from './components/InputPanel.vue'

export default {
  name: 'App',
  components: {
    MainText,
    InputPanel
  }
}
</script>

<style lang="scss">
@import "./Styles/AppStyles.scss";

.input-panel-enter-active {
  animation: inputPanelAppear 5s forwards;
}

.maintext-enter-active {
  animation: maintextAppear 7s forwards;
}

@keyframes inputPanelAppear {
  0% {
    opacity: 0;
    transform: translateY(-100vh);
  }
  30% {
    opacity: 1;
    transform: translateY(-60vh);
  }
  60% {
    transform: translateY(-60vh);
  }
  100% {

  }
}

@keyframes maintextAppear {
  0% {
    opacity: 0;
  }
  72% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
</style>
