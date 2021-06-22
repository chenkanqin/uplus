// 路由
import {mapGetters} from 'vuex'
import bottomSlot from '@/components/bottom-slot/index.vue';

export default {
  name: "AllErrorDiary",
  components: {
    bottomSlot
  },
  data() {
    return {
      appHeader: {
        title: '错误日记'
      }
    }
  },
  computed: {
    ...mapGetters([
      'errorLog',
    ]),
  },
  methods: {
    //
    handleAddError() {
      let name = 'name-' + Math.random() * 10;
      this.appHeader.errorTest[name];
      uni.$co.Fun.showToast('模拟成功')
    }
  }
}