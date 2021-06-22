<template>
  <layout :header="false">
    <view class="position-relative detail-container background-color-success">
      <!--      <div class="goods-image bg-center" :style="{backgroundImage: `url(https://i.postimg.cc/FHjYRxBw/11525578.png)`}"></div>-->
      <view class="app-name font-weight-bolder display-center">
        <text>UPLUS</text>
      </view>
      <view class="padding-base">
        <view class="padding-row-base padding-col-lg border-radius-base background-theme-color">
          <view class="font-weight-bold">UPlus Uni App</view>
          <view class="margin-top-base font-simple-color font-size-sm">快速构建多端客户端框架</view>
        </view>
      </view>
      <view class="display-flex justify-content-center margin-col-lg align-items-center transition-base">
        <view v-for="(item,index) in ['APP','小程序','快应用']" :key="index"
              class="display-center border-radius-base background-color-warning padding-row-lg sku-item font-inverse-color"
              :class="{'background-color-danger font-weight-bold':currentSku ===index}" @click="currentSku = index">
          <v-icon v-if="currentSku ===index" class="font-v-icon" size="30"
                  className="icon-xuanzhong font-weight-bold background-color-warning border-radius-sm"></v-icon>
          <text>{{ item }}</text>
        </view>
      </view>
    </view>
    <view class="position-absolute cart-add-box background-color-warning" @click="handleAdd">
      <view class="position-absolute display-center cart-add font-weight-bold">
        <v-icon size="40" className="icon-jiarugouwuche font-weight-bolder"></v-icon>
        <text class="add-text">加入购物车</text>
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