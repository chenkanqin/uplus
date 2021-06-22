<template>
  <layout :header="false">
    <view class="box-sizing-border-box padding-row-lg user-box font-size-lg">
      <view class="flex-1">
        <view class="display-flex align-items-center user-info">
          <view class="user-avatar bg-center border-radius-lg margin-right-lg background-theme-color box-shadow"
                :style="{backgroundImage: `url(${user.avatar})`}"></view>
          <view class="user-title">
            <view class="user-name font-weight-bold">{{ user.name }}</view>
            <view class="user-desc font-size-base font-simple-color">{{ user.desc }}</view>
            </view>
          </view>
        <view class="display-flex align-items-center justify-content-center fun-container">
          <view v-for="(item,index) in tab" :key="index" class="display-flex justify-content-center fun-item flex-1">
            <view>
              <view
                class="display-center user-avatar fun-item-img border-radius-lg background-theme-color box-shadow">
                <v-icon size="50" :className="item.icon"></v-icon>
              </view>
              <view class="text-align-center font-size-sm">
                <text>{{ item.title }}</text>
              </view>
            </view>
          </view>
        </view>
      </view>

    </view>
    <view
      class="position-relative display-flex align-items-center justify-content-center font-weight-bold position-relative user-content">
      <text>欢迎来到UPlus Uni App 框架</text>
    </view>
    <view class="padding-row-base">
      <view class="padding-row-base background-theme-color border-radius-lg">
        <view v-for="(item,index) in rew" :key="index" class="display-flex align-items-center rew-list theme-bg-color"
              @click="handlerClickToPage(item.page)">
          <v-icon size="36" :className="item.icon"></v-icon>
          <view class="display-flex justify-content-space-between align-items-center flex-1 border-bottom rew-item">
            <text>{{ item.title }}</text>
           <view class="display-flex align-items-center">
             <text v-if="item.num" class="margin-right-base font-weight-bold font-color-danger">{{item.num}}</text>
             <v-icon className="icon-right"></v-icon>
           </view>
          </view>
        </view>
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