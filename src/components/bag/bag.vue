<template>
  <div ref="bag" re class="bag" v-show="true">
    <img width="80%" :src="require('./hongbao.png')" v-on:load="loaded" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
import bindMixins from 'common/mixins/bind'
export default {
  mixins: [bindMixins],
  methods: {
    _animationDown () {
      const bagDown = this.$refs.bag
      bagDown.style.transition = 'all 0.5s'
      bagDown.style.transform = 'translateY(47px)'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bag
    position: fixed
    bottom: 22px
    width: 100%
    margin: 0 auto
    text-align: center
    @media screen and (min-width: 768px)
      bottom: 10px
      left: 50%
      width: 80%
      margin-left: -40%
    @media screen and (max-width: 360px)
      bottom: 30px
</style>
