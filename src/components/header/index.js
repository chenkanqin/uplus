import {mapState} from 'vuex';

export default {
  name: "AppHeader",
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      headerConfig: {
        // border
        isBorder: false,
        // 背景颜色
        backgroundColor: '',
        // 返回上一页
        back: true,
        // 左插槽图标
        leftIcon: '',
        // 字体颜色
        color: '',
        // 左插槽文本
        leftText: '',
        // 标题
        title: '',
        // 默认有空间
        support: true,
      },
      pageNum: [],
    }
  },
  computed: {
    ...mapState({
      sysInfo: state => state.settings.sysInfo
    }),
    // 左边icon class
    leftIconClass() {
      let icon = '';
      let {headerConfig, pageNum} = this;
      if (headerConfig.back && pageNum) {
        if (pageNum.length === 1) {
          icon = 'icon-icon_home';
        } else {
          icon = headerConfig.leftIcon ? headerConfig.leftIcon : 'icon-icon_back';
        }
      }
      return 'header-iconfont ' + icon;
    },
    // 设置颜色var
    backgroundColor() {
      let colors = '';
      let {backgroundColor} = this.headerConfig;
      if (backgroundColor) {
        colors = `background-color:${backgroundColor}`;
      }
      return colors;
    }
  },
  watch: {
    // 头部设置
    config: {
      immediate: true,
      handler(val) {
        this.headerConfig = uni.$co.Common.objectSetValue(this.headerConfig, val);
      }
    }
  },
  methods: {
    // 页面显示 onShow
    pageShow() {
      this.pageNum = getCurrentPages();
    },
    // 点击返回
    handleBack() {
      uni.$co.Fun.back();
    },
  }
}