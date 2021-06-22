<template>
  <view>
    <!--用户底部固定-->
    <view class="support-box"></view>
    <view class="bottom-button-container">
      <slot/>
    </view>
    <view class="support-bottom" :style="backgroundColor"></view>
  </view>
</template>

<script>
export default {
  name: "BottomSlot",
  props: {
    background: {
      type: String,
      default: ''
    }
  },
  computed: {
    backgroundColor() {
      return this.background ? `background-color:${this.background}` : '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>