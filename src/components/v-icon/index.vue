<template>
  <text class="u-icon">
    <text :style="fontSize" :class="['iconfont',className]"></text>
  </text>
</template>
<script>
/*icon*/
export default {
  name: 'UIcon',
  props: {
    // 样式名称
    className: {
      type: String,
      default: ''
    },
    // 字体大小
    size: {
      type: String,
      default: ''
    },
    // 字体颜色
    color: {
      type: String,
      default: ''
    },
  },
  computed: {
    fontSize() {
      let style = `font-size:${this.size}upx`;
      if (this.color) {
        style = `${style};color:${this.color}`;
      }
      return style;
    }
  }
}
</script>

<style lang="scss" scoped>
.u-icon {
  display: inline-block;
  box-sizing: border-box;

  > text {
    color: inherit;
    overflow: hidden;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/**-----------------------header图标 一般不需要修改--------------------------------*/
@font-face {
  font-family: "headericonfont";
  src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN4AAsAAAAAB5wAAAMrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGZACDHAqCPIITATYCJAMQCwoABCAFhG0HSBulBsgekgSVgCr2AIkCKLDE+VCe/RtUk4XS3e98EsUEVfrT2Q/zSl15Fa7GTSAAjtktadQWpQmUJFU2XGNYfYA8pfrrwwYcsGYeWzjIChxOu+J3luVyz+FLgZVgQP/beSABF0juDWMXtMRzQABCKz3Q3oBh41CwiqgMquLMVgJJOVk5VgRBHsBxmAoi/BXLfWGQfz6gZ3oLsDX4PvlDMxAEKF8I5kmjJv3juPYm8KYtW/Yf00KPcJyuAi6n8P/AB2CAZpszkVkXRxSLEs0woqo31wEQFERhYnvRm7aDK7AJ2D7fcgIU/3kkCrM0DwC0g0kGbwIOGyi8KZKjStkWih6glAOAYFQ0BZBmqqoHT6QIkgzHs5sNaTO+6+PIgXJr71WXu9/37RKT8jacIGzv0Y2HdZoPCLtt+4+lO+n3nIT3+LKyOHyf47GFE45c6o079Al6vK9pZPnFmxuvnwe060PCDpzpODuZty4ya1Zkb78wMM+yvjT5YlsTWs/6GVq05FepCU0UhgsFf87xrPL/QqMn4caKb06ZcrOea71UXufLupncTJe1Wt/q74+MaD8CP6Z6x8y8vl46vtS4pnXRztXYc6ynV+b+jsgCgP+xvUwPRo8epP8AYC369qf8Bvphy+/Mwm5fgxoHADx6uukm9P+PY5jwlQo7C36B6CKbci0I8HCVxBH9VlWTwWMoQBCAN54BSjyZQqPfVooI0hNQATXABNUjcmoz+GjawS+oJ4SmBq7WlPIwJBwC0MRqAKLIWVAFroIpcpvIqY/hE/YZfkUBBmFCoHRLTYOAI/p6MqJk3IjON5yYmzFtsxJh+RhpVaYiXloc0CZIL+eEjdbVej49UGakN8WM3ByrjVKmYXpu2hgATpOplGtkPTchY6qFrVS2S8vapOpFLWJuGkJfHilCkeIMUfMZHDGuDNNrr4jC58eQLJVSIryGmirnBJInx+nc0FoLrToQByoynWpu5ZKcOSxtKIrJYPK40gwDgE1KWQmXIVs9KEGKUVqwB8SyumiJmpldFS2WV6VfIJ81YO7BA5QwwokP/rXtVs6XofNPzoxGYskoz3bTEgAA') format('woff2');
}

/** header-iconfont请不要修改*/
.header-iconfont {
  font-family: "headericonfont" !important;
  font-size: 32*1upx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-icon_back:before {
  content: "\e607";
}

.icon-icon_home:before {
  content: "\e610";
}
</style>
