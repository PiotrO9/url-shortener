<template>
    <div id="MainText">
        <span>Short your link</span>
        <div id="TypeWriterText">
            <span>For </span><span id="TypeWriter">Testing</span>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const TypeWriter = document.getElementById("TypeWriter");

        const textLoad = () => {
            setTimeout(() => {
                TypeWriter.textContent = "Testing"
                document.documentElement.style.setProperty('--steps', "7")
            }, 0)
            setTimeout(() => {
                TypeWriter.textContent = "Buissnes"
                document.documentElement.style.setProperty('--steps', "8")
            }, 5000)
            setTimeout(() => {
                TypeWriter.textContent = "Fun"
                document.documentElement.style.setProperty('--steps', "3")
            }, 10000)
            setTimeout(textLoad, 15000)
        }
            textLoad()
    }
}

</script>

<style lang="scss">
@import "../Styles/MainTextStyles.scss";
</style>