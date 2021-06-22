<template>
  <layout :isShowDesc="true" id="layout" :header="false">
    <icons></icons>
    <filters></filters>
    <view class="padding-base">
      <view class="padding-base background-theme-color border-radius-base box-shadow font-color-success"
            style="line-height: 44upx">
        UPlus内部预先根据uni.scss变量等等，自动创建了大量的css样式，基本适用于大部分场景中，使用预设的样式，可以让主题更换中更加完美。基本样式列表详情，请看文档。
      </view>
    </view>
  </layout>
</template>

<script>
import {mapGetters} from 'vuex';
import icons from '../components/icons'
import filters from '../components/filters'

export default {
  name: 'HomeView',
  components: {
    icons,
    filters,
  },
  data() {
    return {
      list: {}
    };
  },
  computed: {
    ...mapGetters([
      'pages',
    ]),
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    /** 拉取数据*/
    fetchData() {
      // uni.$API.Demo.demoList().then(res => {
      //   console.log('res------', res);
      // })
    },
    // 设置为底部导航
    handlerSetFootTab(item) {
      let page = JSON.parse(JSON.stringify(item))
      page['pageParam'] = {
        icon: 'icon-jijindingtou',
        tab: page.pageParam.tab ? '' : 1,
      };
      console.log('item====', page);
      this.$store.dispatch('permission/handleChangeVal', {key: 'changeRoutes', val: {noSetState: true, data: page}});
    },
  }
}
</script>

<style lang="scss" scoped>
.footer-tab {
  margin: 10px;
}
</style>
