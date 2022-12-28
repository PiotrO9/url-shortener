<template>
  <div id="NewUrl">
    <span>Test text longer than usually</span>
    <div id="CopyIcon">
        <fa id="clipboard" icon="clipboard"/>
        <fa @click="CloseNewUrl" id="close" icon="close"/>
        <div v-if="copiedVisibility" id="CopiedAlert">
            <span>Copied</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            copiedVisibility: false
        }
    },
    methods: {
        CloseNewUrl() {
            this.$emit("close")
        }
    }
}
</script>

<style lang="scss">
@import "../Styles/NewUrlStyles.scss";
</style>