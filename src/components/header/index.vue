<template>
  <view class="header-container">
    <view v-if="headerConfig.support" class="status-bar" :style="{height:sysInfo.statusBarHeight+'px'}"></view>
    <view v-if="headerConfig.support" class="support-top"></view>
    <!--  顶部  -->
    <view class="position-fixed header-content box-sizing-border-box"  :style="backgroundColor">
      <view :style="{height:sysInfo.statusBarHeight+'px'}" class="width-100"></view>
      <view class="display-flex align-items-center header-box box-sizing-border-box"
            :class="{border:headerConfig.isBorder}">
        <view @click.native="handleBack" class="display-flex align-items-center header-left">
          <v-icon v-if="headerConfig.back" :className="leftIconClass"></v-icon>
          <text v-if="headerConfig.leftText">{{ pageNum && pageNum.length <= 1 ? '首页' : headerConfig.leftText }}</text>
        </view>
        <view class="flex-1 display-flex justify-content-center font-size-28 font-weight-bold">
          <text>{{ headerConfig.title }}</text>
          <slot></slot>
        </view>
        <view class="header-right"></view>
      </view>
    </view>
  </view>
</template>

<script>
import Index from './index';

export default Index;
</script>

<style scoped lang="scss">
@import "index";
</style>