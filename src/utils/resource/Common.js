class common {
  /**
   * @param fn {Function}   实际要执行的函数
   * @param delay {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
   * @return {Function}     返回一个“去弹跳”了的函数
   */
  // 去抖动函数 (使用场景，输入框连续输入的时候，延迟最后才执行一次)
  debounce(fn, delay) {
    // 定时器，用来 setTimeout
    let timer;
    delay || (delay = 100);
    // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
    return function () {
      // 保存函数调用时的上下文和参数，传递给 fn
      let context = this;
      let args = arguments;
      // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
      clearTimeout(timer);
      // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
      // 再过 delay 毫秒就执行 fn
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    }
  }

  /**
   * @param fn {Function}   实际要执行的函数
   * @param delay {Number}  执行间隔，单位是毫秒（ms）
   * @return {Function}     返回一个“节流”函数
   */
  // 节流阀函数 (节流就是提交表单的时候  用户连续点击了5次  但是我们规定N秒之内 只会提交一次)
  throttle(fn, threshhold) {
    let last; // 记录上次执行的时间
    let timer; // 定时器
    threshhold || (threshhold = 500); // 默认间隔为 500ms

    return function () { // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
      // 保存函数调用时的上下文和参数，传递给 fn
      let context = this
      let args = arguments;
      let now = +new Date();

      // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
      // 执行 fn，并重新计时
      if (last && now < last + threshhold) {
        // clearTimeout(timer)
        // // 保证在当前时间区间结束后，再执行一次 fn
        // timer = setTimeout(function () {
        //   last = now
        //   fn.apply(context, args)
        // }, threshhold)

        // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
      } else {
        last = now;
        fn.apply(context, args);
      }
    }
  }

  //倒计时函数
  repeat(time, callbcak) {
    let that = this;
    if (time > 0) {
      callbcak(time);
      time--;
      setTimeout(function () {
        that.repeat(time, callbcak);
      }, 1000);
    } else {
      callbcak(0);
    }
  }

  /** 判断是否为json格式*/
  isJson(str) {
    if (typeof str === 'string') {
      try {
        let obj = JSON.parse(str);
        return !!(typeof obj === 'object' && obj);
      } catch (e) {
        return false;
      }
    }
  }

  // 过滤空字符和数组 一般用于请求接口
  clearParams(data) {
    const par = {...data}
    for (const ol in par) {
      if (par[ol] === '' || (par[ol] instanceof Array && !par[ol].length)) {
        delete par[ol]
      }
    }
    return par
  }

  // 赋值，一般作用于获取详情复制到当前字段对象中 返回对象
  objectSetValue(target = {}, data = {}) {
    for (let ol in data) {
      if (target.hasOwnProperty(ol)) {
        target[ol] = data[ol];
      }
    }
    return target;
  }
}

export default new common();
