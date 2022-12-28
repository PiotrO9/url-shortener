<template>
  <div id="NewUrl">
    <span id="TextToCopy">Test text longer than usually</span>
    <div id="CopyIcon">
        <fa @click="CopyTextToClipboard" id="clipboard" icon="clipboard"/>
        <transition name="close">
            <fa @click="CloseNewUrl" v-if="closeVisibility" id="close" icon="close"/>
        </transition>
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
            copiedVisibility: false,
            closeVisibility: true
        }
    },
    methods: {
        CloseNewUrl() {
            this.$emit("close")
            this.closeVisibility = false
        },
        CopyTextToClipboard() {
            const TextToCopy = document.getElementById("TextToCopy")

            navigator.clipboard.writeText(TextToCopy.innerText)
            this.copiedVisibility = true
            setTimeout(() => { this.copiedVisibility = false }, 2000)
        }
    }
}
</script>

<style lang="scss">
@import "../Styles/NewUrlStyles.scss";

.new-url-leave-active {

    #CopyIcon {

        #close {

            animation: closeDisappear 1s forwards;
        }
    }
}

@keyframes closeDisappear {
    0% {
        scale: 100%;
        transform: rotate(0);
    }
    100% {
        scale: 0%;
        transform: rotate(360);
    }
}
</style>