const EVENT_LOADED = 'loaded'
export default {
  methods: {
    loaded () {
      this.$parent.$emit(EVENT_LOADED)
    }
  }
}
