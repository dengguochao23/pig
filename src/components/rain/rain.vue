<template>
  <div class="rain-container">
    <div v-for="(page,index) in redPages" :key="index">
      <transition
        @before-enter="beforeDrop"
        @enter="dropping"
        @after-enter="afterDrop"
      >
        <div class="rain" v-if="page.show">
          <img :src="require('./red-icon.png')">
        </div>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 生成红包数量（show=false）--控制红包变化(show=true)---transtion控制样式---红包回收变为false
function createdRedPages () {
  let pages = []
  for (let i = 0; i < 20; i++) {
    pages.push({
      show: false
    })
  }
  return pages
}
export default {
  data () {
    return {
      redPages: createdRedPages(),
      isShow: false
    }
  },
  created () {
  },
  methods: {
    beforeDrop (el) {
      let offsetWidth = document.body.clientWidth || document.documentElement.clientWidth
      let left = Math.max(0, parseInt(Math.random() * (offsetWidth - 50)))
      el.style.left = `${left}px`
      let pageHight = el.children[0].height
      el.style.transform = el.style.webkitTransform = `translate3d(0,-${pageHight},0)`
      el.style.display = ''
    },
    dropping (el, done) {
      let pageHight = el.children[0].height
      let offsetHight = document.body.offsetHeight
      this._reflow = document.body.offsetHeight // 不懂为什么要设置一个这样的东西，但是官方文档并未提及到相关的事项，不然没动画出现
      el.style.transform = el.style.webkitTransform = `translate3d(0,${pageHight + offsetHight}px,0)`
      el.addEventListener('transitionend', done)
    },
    afterDrop () {
      this.recoverPages()
    },
    // 回收红包
    recoverPages () {
      for (let i = 0; i < this.redPages.length; i++) {
        const page = this.redPages[i]
        if (page.show) {
          page.show = false
          return
        }
      }
    },
    // 生成红包
    createRedPage () {
    },
    // 一个一个去控制红包的变化
    startRain () {
      setInterval(() => {
        for (let i = 0; i < this.redPages.length; i++) {
          const page = this.redPages[i]
          if (!page.show) {
            page.show = true
            return
          }
        }
      }, 4000)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .rain-container
    width: 100%
    height: 100%
    background-color: red
    .rain
      z-index: 2000
      position: fixed
      top: 0
      transition: all 4s
</style>
