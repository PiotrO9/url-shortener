<template>
  <main>
    <div id="MainTextSpace">
      <MainText />
    </div>
    <div id="InputPanelSpace">
      <InputPanel />
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
</style>
