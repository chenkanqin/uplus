<script>
export default {
  onLaunch: function () {
    this.init();
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  methods: {
    init() {
      this.$store.dispatch('initApp/handleChangeVal', {key: 'init', val: {noSetState: true}});
      this.setSysInfo();
    },
    // 设置
    setSysInfo() {
      this.$store.dispatch('settings/handleChangeVal', {key: 'sysInfo', val: uni.getSystemInfoSync()});
    },
  }
}
</script>

<style>
/*每个页面公共css */
</style>
