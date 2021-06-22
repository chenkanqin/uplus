import request from '../request';

/** demo*/
class Demo {
  /**get模式*/
  demoList($data) {
    return request.ajax('demo/index/demoList', $data);
  }
}

export default new Demo();
