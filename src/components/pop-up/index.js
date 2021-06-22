// 弹窗底板
export default {
  name: "PopUp",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShowBox: false,
    }
  },
  watch: {
    visible(val) {
      setTimeout(_ => {
        this.isShowBox = val;
      }, val ? 100 : 0)
    }
  }
}