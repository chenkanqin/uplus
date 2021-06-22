// 导航
import {mapGetters} from 'vuex'

export default {
  name: "AllFooterTab",
  data() {
    return {
      appHeader: {
        title: '导航'
      }
    }
  },
  computed: {
    ...mapGetters([
      'footerTabs',
    ]),
  },
}