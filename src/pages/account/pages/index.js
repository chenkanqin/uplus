// 路由
import {mapGetters} from 'vuex'

export default {
  name: "AllPages",
  data() {
    return {
      appHeader: {
        title: '路由'
      }
    }
  },
  computed: {
    ...mapGetters([
      'pages',
    ]),
  },
}