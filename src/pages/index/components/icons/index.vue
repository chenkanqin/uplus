<template>
  <view class="icons-container display-flex align-items-center">
    <view class="display-flex align-items-center flex-flow-wrap">
      <view v-for="(item,index) in icons" :key="index"
            class="display-center icon-box border-radius-lg background-theme-color box-shadow margin-row-sm margin-col-sm">
        <v-icon size="50" :className="item"></v-icon>
      </view>
    </view>
  </view>
</template>

<script>
/** icon 列表*/
export default {
  name: "Icons",
  data() {
    return {
      icons: [
        'icon-jiaoyin',
        'icon-zhuti',
        'icon-baocuofankui',
        'icon-lujing',
        'icon-right',
        'icon-fenlei',
        'icon-zhuye',
        'icon-gouwudai',
        'icon-qiandao',
        'icon-taolun',
        'icon-yonghu',
        'icon-zuanshi',
        'icon-shoucang',
        'icon-gouwuche',
        'icon-daifahuo',
        'icon-daifukuan',
        'icon-daishouhuo',
        'icon-tuihuo3',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icons-container {
  padding: 100*1upx 0;
  background-color: var(--color-primary);
}

.icon-box {
  width: 80*1upx;
  height: 80*1upx;
}
</style>