/**
 * 全局mixins
 * */
import {mapGetters} from 'vuex'

export default {
  name: 'commonMixins',
  props: {},
  data() {
    return {};
  },
  watch: {
    // 页面显示
    pageOnShow: {
      immediate: true,
      handler(val) {
        if (val & this.hasOwnProperty('pageShow') && typeof this.pageShow === "function") {
          this.pageShow();
        }
      }
    },
    // 页面load
    pageOnLoad: {
      immediate: true,
      handler(val) {
        if (val && this.hasOwnProperty('pageLoad') && typeof this.pageLoad === "function") {
          this.pageLoad();
        }
      }
    },
  },
  computed: {
    ...mapGetters([
      'settings',
      'viewRoutes',
      'pageOnLoad',
      'pageOnShow',
    ]),
  },
  onReady() {
    this.handlerSetNavigationBarTitle();
  },
  onShow() {
    this.handleSetPageStatus('pageOnShow', true);
  },
  onHide() {
    this.handleSetPageStatus('pageOnShow', false);
  },
  onLoad() {
    this.handleSetPageStatus('pageOnLoad', true);
  },
  onUnload() {
    this.handleSetPageStatus('pageOnLoad', false);
  },
  methods: {
    // 设置页面的状态
    handleSetPageStatus(key, val) {
      if (this.viewRoutes.path.includes(this.route)) {
        this.$store.dispatch('common/handleChangeVal', {key, val});
      }
    },
    // 跳转页面
    handlerClickToPage(page, par = {}) {
      uni.$co.Fun.toPage(page, par)
    },
    // 设置标题
    handlerSetNavigationBarTitle() {
      let {title} = this.settings;
      if (this.viewRoutes && this.viewRoutes.title) {
        title = `${this.viewRoutes.title} - ${title}`
      }
      uni.setNavigationBarTitle({
        title
      });
    }
  },
};
