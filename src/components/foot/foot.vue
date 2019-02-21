<template>
  <div class="foot">
    <img ref="cloudLeft" width="100%" class="img left" v-on:load="loaded"
         :src="require('./cloudLeft.png')" alt="">
    <img ref="cloudRight" width="100%" class="img right" v-on:load="loaded" :src="require('./cloudRight.png')" alt="">
    <img :src="require('./dgsb.png')" class="logo" alt="">
    <audio ref="audio"
           :src="url"
    ></audio>
  </div>
</template>

<script type="text/ecmascript-6">
import bindMixins from 'common/mixins/bind'
export default {
  mixins: [bindMixins],
  data () {
    return {
      url: require('./dgsb.mp3')
    }
  },
  mounted () {
    this.musicPlay()
  },
  methods: {
    // 初始化视窗的宽度
    _animationLeft () {
      const cloLeft = this.$refs.cloudLeft
      cloLeft.style.transition = 'all 0.5s'
      cloLeft.style.transform = 'translateX(-70px)'
    },
    _animationRight () {
      const cloRight = this.$refs.cloudRight
      cloRight.style.transition = 'all 0.5s'
      cloRight.style.transform = `translateX(70px)`
    },
    // 本来打算设置一个自动播放，无奈安卓和苹果系统都不能自动播放，只能通过手势来开启
    musicPlay () {
      document.addEventListener('touchstart', () => {
        this.$refs.audio.play()
        console.log('xi')
      }, false)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .foot
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    .img
      position: absolute
      bottom: 0
      &.left
        left: 0
      &.right
        right: 0
    .logo
      position: absolute
      left: 50%
      bottom: 0
      margin-left: -25%
</style>
