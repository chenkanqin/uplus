<template>
  <layout :header="false">
    <view class="padding-base cart-container">
      <view class="cart-title font-weight-bold display-center">
        <text>UPlus Cart</text>
      </view>
      <view v-for="(item,index) in 'UPLUSAPP'" :key="index"
            class="display-flex justify-content-space-between padding-lg background-theme-color transition-base border-radius-lg margin-bottom-base box-shadow"
            @click="handleChoose(index)" :class="{'remove-box-shadow background-color-danger':check[index]}">
        <view class="display-flex align-items-center">
          <view
            class="position-relative border-radius-base display-flex align-items-center justify-content-center margin-right-lg add-icon"
            :class="{active:check[index]}">
            <v-icon v-if="check[index]" size="34" className="font-weight-bolder icon-check"></v-icon>
          </view>
          <view class="display-flex align-items-center">
            <view
              class="display-center box-shadow font-weight-bolder border-radius-lg margin-right-lg background-color-success font-inverse-color goods-image">
              <text>{{ item }}</text>
            </view>
            <view>
              <view class="goods-title font-weight-bold" :class="{'font-inverse-color':check[index]}">UPlus App {{ index }}</view>
              <view class="font-size-sm"  :class="{'font-simple-color':!check[index]}">快速创建uni app框架，欢迎你</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="position-fixed width-100 display-flex justify-content-center cart-pay" @click="handlePay">
      <view
        class="display-flex align-items-center justify-content-center background-disable-color font-inverse-color font-weight-bold font-size-lg box-shadow transition-base cart-pay-button"
        :class="buttonStatus">
        <text>立即下单</text>
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