<template>
  <view v-if="visible" class="position-fixed width-100 position-left-top pop-container">
    <view class="position-absolute pop-shadow width-100 position-left-top"></view>
    <view v-if="isShowBox" class="position-relative transition-base">
      <slot/>
    </view>
  </view>
</template>

<script>
import Index from './index';

export default Index;
</script>

<style lang="scss" scoped>
@import "index";
</style>