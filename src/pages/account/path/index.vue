<template>
  <layout :appHeader="appHeader">
    <view class="padding-base footer-container">
      <view v-for="(item,index) in pathRoutes" :key="index"
            class="margin-bottom-lg background-theme-color border-radius-base box-shadow overflow-hidden">
        <view class="padding-base display-flex align-items-center justify-content-space-between">
          <view>
            <text class="font-weight-bold font-size-lg path-index margin-right-lg font-color-danger">{{index + 1}}</text>
            <v-icon :className="item.pageParam.icon"></v-icon>
            <text class="margin-left-base">{{ item.title }}</text>
          </view>
          <view class="font-size-sm">{{item.time | formatTime}}</view>
        </view>
        <view class="padding-base background-disable-color font-size-sm font-inverse-color">{{ item.path }}</view>
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