<template>
  <layout>
    <view class="web-404">
      <image class="web-404-image" mode="widthFix" src="../../static/404.png"></image>
      <view class="web-text">404</view>
    </view>
  </layout>
</template>

<script>
export default {
  name: "404"
}
</script>

<style lang="scss" scoped>
.web-404 {
  text-align: center;

  .web-404-image {
    width: 300*1upx;
  }

  .web-text {
    font-size: 50*1upx;

  }
}
</style>