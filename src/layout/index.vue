<template>
  <view class="layout-container" :style="themeColorObject">
    <!--头部-->
    <app-header v-if="header" :config="appHeader"></app-header>
    <view v-if="isShowDesc" class="padding-row-lg padding-col-lg font-color-danger">
      {{ desc }}
    </view>
    <!--内容展示-->
    <view>
      <slot/>
    </view>
    <footer-tabs v-if="viewRoutes.pageParam && viewRoutes.pageParam.tab"></footer-tabs>
  </view>
</template>

<script>
import footerTabs from './components/footer-tabs/index.vue';

/** layout控制器*/
export default {
  name: 'AppLayout',
  components: {
    footerTabs
  },
  props: {
    // 头部的样式
    appHeader: {
      type: Object,
      default: () => {
        return {}
      }
    },
    //是否显示头部header
    header: {
      type: Boolean,
      default: true
    },
    // 测试描述，生产环境可以删除
    isShowDesc: {
      type: Boolean,
      default: false
    },
    // 底部padding-bottom 默认30upx
    paddingBottom: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      desc: '这段话来自公共layout：每个页面都可以统一处理一些事件，比如公共功能弹窗，广告弹窗等等(生产环境可以删除该dom)'
    }
  },
  computed: {
    // 设置颜色var
    themeColorObject() {
      let colors = '';
      // #ifndef H5
      let {theme} = this.$store.state.initApp || {};
      for (let ol in theme) {
        let curVar = `${ol}:${theme[ol]};`
        colors = colors ? `${colors}${curVar}` : curVar;
      }
      // #endif
      if (this.paddingBottom) {
        colors = `${colors}padding-bottom:${this.paddingBottom}upx;`
      }
      return colors;
    }
  },
  methods: {
    pageShow() {
      // console.log('layout pageShow')
    },
    pageLoad() {
      // console.log('layout pageLoad')
    }
  },
}
</script>

<style lang="scss" scoped>
$headerHeight: 44*2upx;
.layout-container {
  box-sizing: border-box;
  min-height: 100%;
  background-color: var(--app-color);
  color: var(--base-color);
  // #ifndef H5
  min-height: calc(100vh - #{$headerHeight} - 90 * 1upx + env(safe-area-inset-top));
  // #endif
}
</style>