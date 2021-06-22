<template>
  <bottom-slot v-if="showFooter()">
    <view class="display-center footer-tabs">
      <view v-for="(item,index) in footerTabs" :key="index" class="flex-1 display-center footer-item"
            :class="{active:viewRoutes.name === item.name}"
            @click.native="handlerClickFooter(item)">
        <view>
          <text class="iconfont" :class="item.pageParam.icon"></text>
          <view class="tabs-text">{{ item.title }}</view>
        </view>
      </view>
    </view>
  </bottom-slot>
</template>

<script>
// 底部导航
import {mapGetters} from 'vuex'
import bottomSlot from '@/components/bottom-slot/index.vue';

export default {
  name: "AppFooterTabs",
  components: {
    bottomSlot
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'footerTabs',
      'pages',
    ]),
  },
  methods: {
    // 显示底部导航
    showFooter() {
      let isShow = false;
      let item = this.pages.find(v => v.name === this.viewRoutes.name)
      if (this.footerTabs && this.footerTabs.length && item && item.pageParam.tab) {
        isShow = true;
      }
      return isShow;
    },
    // 点击切换
    handlerClickFooter(item) {
      if (this.viewRoutes.name === item.name) return;
      uni.$co.Fun.toPage(item.name || item.name);
    },
  }
}
</script>

<style scoped lang="scss">

.footer-tabs {
  box-shadow: -6*1upx 0 4*1upx rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 16*1upx;

  .footer-item {
    height: 100*1upx;
    color: var(--footer-font-color);


    &.active {
      color: var(--footer-active-font-color);
    }

    .iconfont {
      font-size: 40*1upx;
    }

    .tabs-text {
      font-size: 24*1upx;
    }
  }
}
</style>