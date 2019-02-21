<template>
  <div class="top" ref="top">
    <img width="100%" :src="require('./top.png')" v-on:load="loaded" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
import bindMixins from 'common/mixins/bind'
export default {
  mixins: [bindMixins],
  mounted () {
  },
  methods: {
    _animationTop () {
      const top = this.$refs.top
      top.style.transition = 'all 0.5s'
      top.style.transform = 'translateY(-20px)'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .top
    position: fixed
    top: 0
    left: 0
    width: 100%
    background-size: 100% 100%
</style>
