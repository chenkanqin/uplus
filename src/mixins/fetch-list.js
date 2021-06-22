// 列表mixins
export default {
  name: 'FetchDataList',
  props: {},
  data() {
    return {
      searchParams: {
        page: 1,
        size: 20
      },
      apiField: {
        module: '', // api目录下的文件名称
        api: '', // api的名称
        searchKey: 'searchParams', // 搜索
        listKey: 'list', //数据
        // 额外处理处理 $data 接口返回， $self -> this
        handler($data, $self) {
          return $data;
        }
      },
      isLast: false,
      isLadingFetch: false,
    };
  },
  methods: {
    // 获取列表
    async fetchDataList() {
      if (this.isLast || this.isLadingFetch) return;
      this.isLadingFetch = true;
      try {
        let res = await uni.$API[this.apiField.module][this.apiField.api](this[this.apiField.searchKey]);
        console.log('res===', res)
        this.isLadingFetch = false;
        if (this.apiField.hasOwnProperty('handler') && typeof this.apiField.handler === 'function') {
          res = this.apiField.handler(res, this);
        }
        if (res.code === 0) {
          this[this.apiField.listKey] = this[this.apiField.searchKey].page === 1 ? res.data : this[this.apiField.listKey].concat(res.data);
          this.isLast = this[this.apiField.listKey].length >= res.count;
        }
      } catch (e) {
        console.log('res===', e)
        this.isLadingFetch = false;
      }
    },
    // 下拉
    refreshData() {
      this.isLast = false;
      this[this.apiField.searchKey].page = 1;
      this.fetchDataList();
    },
    // 上拉
    onReachData() {
      if (!this.isLast) {
        this[this.apiField.searchKey].page += 1;
        this.fetchDataList();
      }
    },
  },
};
