import bottomSlot from '@/components/bottom-slot/index.vue';

export default {
  name: "CartView",
  components: {
    bottomSlot
  },
  data() {
    return {
      check: {},
    }
  },
  computed: {
    // 按钮状态
    buttonStatus() {
      let className = '';
      let {check} = this;
      for (let ol in check) {
        if (check[ol]) {
          className = 'background-color-warning';
        }
      }
      return className;
    }
  },
  methods: {
    handlePay() {
      if (this.buttonStatus) {
        uni.$co.Fun.showToast('模拟下单成功')
      }else {
        uni.$co.Fun.showToast('请选择商品')
      }
    },
    // 选择
    handleChoose(index) {
      let {check} = this;
      if (check.hasOwnProperty(index)) {
        check[index] = !check[index];
      } else {
        this.$set(check, index, true);
      }
    }
  }
}