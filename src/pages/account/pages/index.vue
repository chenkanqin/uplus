<template>
  <layout :appHeader="appHeader">
    <view class="padding-base footer-container">
      <view v-for="(item,index) in pages" :key="index"
            class="margin-bottom-lg background-theme-color border-radius-base box-shadow overflow-hidden">
        <view class="padding-base ">
          <view>
            <v-icon :className="item.pageParam.icon"></v-icon>
            <text class="margin-left-base">{{ item.title }}</text>
          </view>
          <view class="margin-top-sm">别名：{{ item.name }}</view>
        </view>
        <view class="padding-base background-color-primary font-size-sm font-inverse-color">{{ item.path }}</view>
      </view>
    </view>
  </layout>
</template>

<script>
import Index from './index';

export default Index;
</script>

<style lang="scss" scoped>
@import "index";
</style>