<template>
    <div id="MainText">
        <span>Short your link</span>
        <div id="TypeWriterText">
            <span>For </span><span id="TypeWriter">Testing</span>
        </div>
    </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core'
export default {
    mounted() {
        const TypeWriterText = document.getElementById("TypeWriter")

        var typeWriter = new Typewriter(TypeWriterText, {
            loop: true,
            autostart: true,
        })

        typeWriter.pauseFor(5500)
            .typeString("Testing")
            .pauseFor(4000)
            .deleteAll()
            .typeString("Buissnes")
            .pauseFor(4000)
            .deleteAll()
            .typeString("Fun")
            .pauseFor(4000)
            .deleteAll()
            .start()
    }
}

</script>

<style lang="scss">
@import "../assets/Styles/MainTextStyles.scss";
</style>