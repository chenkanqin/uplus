// 路由
import {mapGetters} from 'vuex'

export default {
  name: "AllPages",
  data() {
    return {
      appHeader: {
        title: '轨迹'
      }
    }
  },
  computed: {
    ...mapGetters([
      'pathRoutes',
    ]),
  },
}