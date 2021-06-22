<template>
  <view class="filters-container">
    <view class="padding-row-base padding-col-base border-radius-base content-box">
      <view class="margin-bottom-lg font-weight-bold">全局filters,比如字数转换</view>

      <view>100 = {{ 100 | numberFormatter }}</view>
      <view>1000 = {{ 1000 | numberFormatter }}</view>
      <view>10000 = {{ 10000 | numberFormatter }}</view>
      <view>100000 = {{ 100000 | numberFormatter }}</view>
      <view>1000000 = {{ 1000000 | numberFormatter }}</view>
      <view>10000000 = {{ 10000000 | numberFormatter }}</view>

    </view>
  </view>
</template>

<script>
export default {
  name: "Filters"
}
</script>

<style lang="scss" scoped>
.filters-container {
  padding: 30*1upx $uni-spacing-row-base;
  background-color: var(--color-danger);

  .content-box {
    background-color: rgba(getColorAlpha(theme-color), 0.6);
  }
}
</style>