<template>
  <view>
    <layout :appHeader="appHeader">
      <view class="padding-base">

        <view class="display-flex padding-lg font-color-danger justify-content-center">
          <text>属性的具体含义以及用法，请查看文档</text>
        </view>

        <view v-for="(value, key, index) in theme" :key="index"
              class="display-flex align-items-center justify-content-space-between margin-bottom-lg background-theme-color border-radius-base box-shadow padding-row-base padding-col-lg"
              @click="handleTapColor(key)">
          <view>
            <view>名称：
              <text>{{ initTheme[key] && initTheme[key].name }}</text>
            </view>
            <view class="font-size-sm font-simple-color">属性:
              <text class="margin-left-sm"> {{ key }}</text>
            </view>
          </view>
          <view class="display-flex align-items-center ">
            <view class="color-val margin-right-sm border-radius-base box-shadow border-base"
                  :style="{backgroundColor:value}"></view>
            <v-icon className="icon-right"></v-icon>
          </view>
        </view>
      </view>
    </layout>
    <pop-up :visible="visible">
      <color-select :colorKey="colorKey" @change="handleChange"></color-select>
    </pop-up>
    <bottom-slot v-if="!visible">
      <view class="display-flex align-items-center justify-content-center reset-btn"
            @click="handleReset">
        <text>重置主题</text>
      </view>
    </bottom-slot>
  </view>
</template>

<script>
import Index from './index';

export default Index;
</script>

<style lang="scss" scoped>
.color-val {
  width: 50*1upx;
  height: 50*1upx;
}

.reset-btn {
  height: 100*1upx;
}
</style>