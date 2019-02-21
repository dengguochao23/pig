<template>
  <div id="app">
    <background></background>
    <top ref="top"></top>
    <title-text ref="titleText"></title-text>
    <pig></pig>
    <bag ref="bag"></bag>
    <foot ref="foot"></foot>
    <rain ref="rain"></rain>
  </div>
</template>

<script type="text/ecmascript-6">
import Background from 'components/background/background'
import Top from 'components/top/top.vue'
import TitleText from 'components/title/title.vue'
import Pig from 'components/pig/pig.vue'
import Bag from 'components/bag/bag.vue'
import Foot from 'components/foot/foot.vue'
import Rain from 'components/rain/rain.vue'
import Promise from 'bluebird'
export default {
  name: 'app',
  mounted () {
    this.$on('loaded', () => {
      this.ret++
      if (this.ret >= 8) {
        this.startAnimation()
      }
    })
  },
  created () {
    this.ret = 0
  },
  methods: {
    async startAnimation () {
      try {
        await Promise.delay(1000)
        await this.$refs.foot._animationLeft()
        await this.$refs.foot._animationRight()
        await this.$refs.top._animationTop()
        await Promise.delay(1000)
        await this.$refs.rain.startRain()
        await this.$refs.bag._animationDown()
        await Promise.delay(1000)
        await this.$refs.top._animationTop()
        await Promise.delay(1000)
        await this.$refs.titleText._animationTitle()
      } catch (e) {
        console.log(e)
      }
    }
  },
  components: {
    Rain,
    Bag,
    Pig,
    TitleText,
    Foot,
    Top,
    Background
  }
}
</script>
<style lang="stylus" scoped>
  #app
    position: relative
    width: 100%
</style>
