<template>
  <div class="pig">
    <div class="head">
      <img width="50%" v-on:load="loaded" :src="require('./hand.png')" alt="">
    </div>
    <div class="body">
      <img width="50%" v-on:load="loaded" :src="require('./body.png')" alt="">
    </div>
    <div class="hand">
      <img width="50%" v-on:load="loaded" :src="require('./head.png')" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import bindMixins from 'common/mixins/bind'
export default {
  mixins: [bindMixins]
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .pig
    position: fixed
    bottom: 120px
    left: 50%
    transform: translateX(-50%)
    display: flex
    width: 100%
    flex-direction: column
    justify-content: center
    @media screen and (max-width: 360px)
      bottom: 110px
    @media screen and (min-width: 768px)
      bottom: 200px
      width: 70%
    .body
      text-align: center
    .head
      text-align: center
      margin-bottom: -20px
      z-index: 10
    .hand
      text-align: center
      position: absolute
      top: 60%
      width: 100%
      z-index: 20
      animation: pighand 0.2s infinite
      -webkit-animation: pighand 0.2 infinite
      animation-direction: alternate
      -webkit-animation-direction: alternate

  @keyframes pighand
    0%
      transform: translateY(0px)
    100%
      transform: translateY(5px)
</style>
