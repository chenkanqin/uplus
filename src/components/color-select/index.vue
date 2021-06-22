<template>
  <view class="padding-base">
    <view class="color-list">
      <view v-for="(item,index) in colors" :key="index" class="display-flex align-items-center">
        <view v-for="(co,coIndex) in item" :key="coIndex" class="color-item transition-base flex-1"
              :style="{backgroundColor:co}" :class="{active:current.index === index && current.coIndex === coIndex}"
              @click="handleSelectColor(co,index,coIndex)"></view>
      </view>
    </view>

    <bottom-slot :background="current.co">
      <view class="display-flex align-items-center font-weight-bolder justify-content-center save-btn" :style="co"
            @click="handleChange">
        <text>保存</text>
      </view>
    </bottom-slot>
  </view>
</template>

<script>
import Index from './index';

export default Index;
</script>

<style lang="scss" scoped>
@import "index";
</style>