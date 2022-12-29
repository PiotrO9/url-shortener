<template>
  <main>
    <transition name="new-url" appear>
      <NewUrl v-if="NewUrlVisibility" @close="CloseNewUrl" :shortLink="ShortLink"/>
    </transition>
    <div id="MainTextSpace">
      <transition name="maintext" appear>
        <MainText />
      </transition>
    </div>
    <div id="InputPanelSpace">
      <transition name="input-panel" appear>
        <InputPanel @shorted="DisplayNewUrl"/>
      </transition>
    </div>
  </main>
</template>

<script>
import MainText from './components/MainText.vue'
import InputPanel from './components/InputPanel.vue'
import NewUrl from './components/NewUrl.vue'
import UrlShortenerApiKey from './utils/apikeys/ShortUrlApi.js'
import FetchApi from './utils/FetchApi.js'

export default {
  name: 'App',
  data(){
    return {
      NewUrlVisibility: false,
      ShortLink: ""
    }
  },
  components: {
    MainText,
    InputPanel,
    NewUrl
  },
  methods: {
    DisplayNewUrl(LongLink) {
      FetchApi(LongLink)
        .then((res) => this.ShortLink = res)
        .then(this.NewUrlVisibility = true)
    },
    CloseNewUrl() {
      this.NewUrlVisibility = false
    }
  },
  mounted() {
    let tst = UrlShortenerApiKey;

    // FetchApi().then((res) => console.log(res[0]))

  //   fetch('https://api-ssl.bitly.com/v4/shorten', {
  //     method: 'POST',
  //     headers: {
  //         'Authorization': `Bearer ${UrlShortenerApiKey}`,
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ "long_url": "https://www.youtube.com/watch?v=UtKLFZE9__4", "domain": "bit.ly" })
  // }).then((res) => res.json())
  // .then((test) => console.log(test.link));
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

.new-url-enter-active {
  animation: newUrlAppear 3s forwards;
}

.new-url-leave-active {
  animation: newUrlDisappear 2s forwards;
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

@keyframes newUrlAppear {
  0% {
    transform: translate3d(100vw, -15vh, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes newUrlDisappear {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100vw, -15vh, 0);
  }
}
</style>