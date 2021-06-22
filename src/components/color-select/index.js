// Demo 选择颜色
import bottomSlot from '@/components/bottom-slot/index.vue';

export default {
  name: "ColorSelect",
  props: {
    colorKey: {
      type: String,
      default: '',
    },
  },
  components: {
    bottomSlot,
  },
  data() {
    return {
      current: {
        index: null,
        coIndex: null,
        co: '',
      },
      colors: [
        [
          '#78281f',
          '#943126',
          '#b03a2e',
          '#cb4335',
          '#e74c3c',
          '#ec7063',
          '#f1948a',
          '#f5b7b1',
          '#fadbd8',
          '#fdedec',
        ],

        [
          '#512e5f',
          '#633974',
          '#76448a',
          '#884ea0',
          '#9b59b6',
          '#af7ac5',
          '#c39bd3',
          '#d7bde2',
          '#ebdef0',
          '#f5eef8',
        ],

        [
          '#4a235a',
          '#5b2c6f',
          '#6c3483',
          '#7d3c98',
          '#8e44ad',
          '#a569bd',
          '#bb8fce',
          '#d2b4de',
          '#e8daef',
          '#f4ecf7',
        ],

        [
          '#154360',
          '#1a5276',
          '#1f618d',
          '#2471a3',
          '#2980b9',
          '#5499c7',
          '#7fb3d5',
          '#a9cce3',
          '#d4e6f1',
          '#eaf2f8',
        ],

        [
          '#1b4f72',
          '#21618c',
          '#2874a6',
          '#2e86c1',
          '#3498db',
          '#5dade2',
          '#85c1e9',
          '#aed6f1',
          '#d6eaf8',
          '#ebf5fb',
        ],

        [
          '#0e6251',
          '#117864',
          '#148f77',
          '#17a589',
          '#1abc9c',
          '#48c9b0',
          '#76d7c4',
          '#a3e4d7',
          '#d1f2eb',
          '#e8f8f5',
        ],

        [
          '#0b5345',
          '#0e6655',
          '#117a65',
          '#138d75',
          '#16a085',
          '#45b39d',
          '#73c6b6',
          '#a2d9ce',
          '#d0ece7',
          '#e8f6f3',
        ],

        [
          '#145a32',
          '#196f3d',
          '#1e8449',
          '#229954',
          '#27ae60',
          '#52be80',
          '#7dcea0',
          '#a9dfbf',
          '#d4efdf',
          '#e9f7ef',
        ],

        [
          '#186a3b',
          '#1d8348',
          '#239b56',
          '#28b463',
          '#2ecc71',
          '#58d68d',
          '#82e0aa',
          '#abebc6',
          '#d5f5e3',
          '#eafaf1',
        ],

        [
          '#7d6608',
          '#9a7d0a',
          '#b7950b',
          '#d4ac0d',
          '#f1c40f',
          '#f4d03f',
          '#f7dc6f',
          '#f9e79f',
          '#fcf3cf',
          '#fef9e7',
        ],

        [
          '#7e5109',
          '#9c640c',
          '#b9770e',
          '#d68910',
          '#f39c12',
          '#f5b041',
          '#f8c471',
          '#fad7a0',
          '#fdebd0',
          '#fef5e7',
        ],

        [
          '#784212',
          '#935116',
          '#af601a',
          '#ca6f1e',
          '#e67e22',
          '#eb984e',
          '#f0b27a',
          '#f5cba7',
          '#fae5d3',
          '#fdf2e9',
        ],

        [
          '#641e16',
          '#7b241c',
          '#922b21',
          '#a93226',
          '#c0392b',
          '#cd6155',
          '#d98880',
          '#e6b0aa',
          '#f2d7d5',
          '#f9ebea',
        ],

        [
          '#6e2c00',
          '#873600',
          '#a04000',
          '#ba4a00',
          '#d35400',
          '#dc7633',
          '#e59866',
          '#edbb99',
          '#f6ddcc',
          '#fbeee6',
        ],

        [
          '#626567',
          '#797d7f',
          '#909497',
          '#a6acaf',
          '#bdc3c7',
          '#cacfd2',
          '#d7dbdd',
          '#e5e7e9',
          '#f2f3f4',
          '#f8f9f9',
        ],

        [
          '#4d5656',
          '#5f6a6a',
          '#717d7e',
          '#839192',
          '#95a5a6',
          '#aab7b8',
          '#bfc9ca',
          '#d5dbdb',
          '#eaeded',
          '#f4f6f6',
        ],

        [
          '#424949',
          '#515a5a',
          '#616a6b',
          '#707b7c',
          '#7f8c8d',
          '#99a3a4',
          '#b2babb',
          '#ccd1d1',
          '#e5e8e8',
          '#f2f4f4',
        ],

        [
          '#1b2631',
          '#212f3c',
          '#283747',
          '#2e4053',
          '#34495e',
          '#5d6d7e',
          '#85929e',
          '#aeb6bf',
          '#d6dbdf',
          '#ebedef',
        ],

        [
          '#17202a',
          '#1c2833',
          '#212f3d',
          '#273746',
          '#2c3e50',
          '#566573',
          '#808b96',
          '#abb2b9',
          '#d5d8dc',
          '#eaecee',
        ],

        [
          '#7b7d7d',
          '#979a9a',
          '#b3b6b7',
          '#d0d3d4',
          '#ecf0f1',
          '#f0f3f4',
          '#f4f6f7',
          '#f7f9f9',
          '#fbfcfc',
          '#fdfefe',
        ],
      ]
    }
  },
  computed: {
    co() {
      return this.current.co ? `background-color:${this.current.co}` : '';
    }
  },
  methods: {
    // 选择颜色
    handleSelectColor(co, index, coIndex) {
      this.current = {index, coIndex, co};
    },
    handleChange() {
      let val = {};
      val[this.colorKey] = this.current.co;
      if (val[this.colorKey]) {
        this.$store.dispatch('initApp/handleChangeVal', {
          key: 'changeThemeColor',
          val
        })
        uni.$co.Fun.showToast('设置成功')
      }
      this.$emit('change');
    }
  }
}