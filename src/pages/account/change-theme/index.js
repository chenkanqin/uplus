// Demo 修改主题
import colorSelect from '@/components/color-select/index.vue';
import popUp from '@/components/pop-up/index.vue';
import bottomSlot from '@/components/bottom-slot/index.vue';
import {mapGetters} from 'vuex';

export default {
  name: "ChangeTheme",
  components: {
    colorSelect,
    popUp,
    bottomSlot
  },
  data() {
    return {
      appHeader: {
        title: '修改主题'
      },
      // 需要改变的颜色key
      colorKey: '',
      visible: false,
      // 默认的key
      initTheme: {
        "--body-color": {
          key: "#222",
          name: 'body、html背景色'
        },
        "--app-color": {
          key: "#f5f5f5",
          name: 'app背景色(小程序page)'
        },
        "--theme-color": {
          key: "#fff",
          name: '主题背景色'
        },
        "--base-color": {
          key: "#222",
          name: '基本色(字体)'
        },
        "--simple-color": {
          key: "#7b7b7b",
          name: '描述(字体)',
        },
        "--inverse-color": {
          key: "#fff",
          name: '反色(字体)'
        },
        "--placeholder-color": {
          key: "#808080",
          name: 'placeholder(字体input)'
        },
        "--disable-color": {
          key: "#c0c0c0",
          name: '禁用点击颜色'
        },
        "--color-primary": {
          key: "#115d37",
          name: '主要(行为)'
        },
        "--color-warning": {
          key: "#feae57",
          name: '警告(行为)'
        },
        "--color-success": {
          key: "#3bb86b",
          name: '成功(行为)'
        },
        "--color-danger": {
          key: "#d94b46",
          name: '危险(行为)'
        },
        "--header-background-color": {
          key: "#fff",
          name: '头部背景色'
        },
        "--header-font-color": {
          key: "#222",
          name: '头部字体色'
        },
        "--footer-background-color": {
          key: "#fff",
          name: '底部tab背景色'
        },
        "--footer-font-color": {
          key: "#222",
          name: '底部tab字体色'
        },
        "--footer-active-font-color": {
          key: "#d94b46",
          name: '底部tab激活状态'
        },
        "--mask-background-color": {
          key: "rgba(0, 0, 0, 0.4)",
          name: '遮罩颜色'
        },
        "--border-color": {
          key: "#c8c7cc",
          name: '边框颜色'
        }
      },
    }
  },
  computed: {
    ...mapGetters([
      'theme',
    ]),
  },
  methods: {
    // 重置主题
    handleReset() {
      let theme = JSON.parse(JSON.stringify(this.initTheme));
      let $initTheme = {};
      for (let ol in theme) {
        $initTheme[ol] = theme[ol].key;
      }
      this.$store.dispatch('initApp/handleChangeVal', {
        key: 'changeThemeColor',
        val: $initTheme
      });
      uni.$co.Fun.showToast('重置成功')
    },
    handleTapColor(key) {
      this.colorKey = key;
      this.visible = true;
    },
    // 更新主题完成
    handleChange() {
      this.visible = false;
      this.colorKey = '';
    },
  }
}