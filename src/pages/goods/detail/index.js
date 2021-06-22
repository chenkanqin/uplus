export default {
  name: "GoodsDetail",
  data() {
    return {
      currentSku: 0,
    }
  },
  methods: {
    handleAdd() {
      uni.$co.Fun.showToast('模拟加购成功')
    }
  }
}