import {mapGetters} from 'vuex'

export default {
  name: "AccountView",
  data() {
    return {
      user: {
        avatar: 'https://i.postimg.cc/q7CPcDsM/200017-16228080178825.jpg',
        name: 'UPlus',
        desc: 'uni-app 快速建APP框架'
      },
      tab: [
        {
          title: '待付款',
          num: '',
          icon: 'icon-daifukuan'
        },
        {
          title: '待发货',
          num: '',
          icon: 'icon-daifahuo'
        },
        {
          title: '待收货',
          num: '',
          icon: 'icon-daishouhuo'
        },
        {
          title: '退换货',
          num: '',
          icon: 'icon-tuihuo3'
        }
      ],
      rew: [
        {
          title: '导航',
          icon: 'icon-fenlei',
          page: 'footer',
        },
        {
          title: '主题',
          icon: 'icon-zhuti',
          page: 'changeTheme',
        },
        {
          title: '路由',
          icon: 'icon-lujing',
          page: 'pages',
        },
        {
          title: '轨迹',
          icon: 'icon-jiaoyin',
          page: 'path',
        },
        {
          title: '报错日记',
          icon: 'icon-baocuofankui',
          page: 'errorDiary',
        },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'errorLog',
    ]),
  },
  watch: {
    errorLog: {
      immediate: true,
      handler(val) {
        let errorDiary = this.rew.find(re => re.page === 'errorDiary');
        if (errorDiary) {
          this.$set(errorDiary, 'num', val.length || 0)
        }
      }
    }
  }
}