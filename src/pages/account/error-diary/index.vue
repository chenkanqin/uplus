<template>
  <view>
    <layout :appHeader="appHeader">
      <view class="padding-base footer-container">
        <view v-for="(item,index) in errorLog" :key="index"
              class="margin-bottom-lg background-theme-color border-radius-base box-shadow overflow-hidden">
          <view class="padding-base ">
            <view class="margin-bottom-sm">
              <text class="font-weight-bold font-size-lg path-index margin-right-lg font-color-danger">
                {{ index + 1 }}、
              </text>
              Evn: {{ item.evn }}
            </view>
            <view class="font-color-danger font-weight-bold">Error: {{ item.err }}</view>
            <view class="font-color-warning">Info: {{ item.info }}</view>
          </view>
          <view class="padding-base background-color-primary font-size-sm font-inverse-color">
            {{ item.path.fullPath }}
          </view>
        </view>
      </view>
    </layout>
    <bottom-slot>
      <view class="display-flex align-items-center justify-content-center add-btn" @click.stop="handleAddError">
        <text>模拟报错</text>
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