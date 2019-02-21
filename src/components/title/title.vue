<template>
  <div class="title">
    <img ref="newYear" width="75%" :src="require('./xinniankuaile.png')" v-on:load="loaded"  alt="">
  </div>
</template>

<script type="text/ecmascript-6">
import bindMixins from 'common/mixins/bind'
export default {
  mixins: [bindMixins],
  methods: {
    _animationTitle () {
      const top = this.$refs.newYear
      top.style.transition = 'all 0.5s'
      top.style.width = '100%'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title
    position: fixed
    top: 20%
    left: 0px
    width: 100%
    text-align: center
</style>
