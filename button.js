
Vue.component('el-button', {
    props: {
        // 按钮图标
        icon: {
            type: String,
            default: ''
        },
        // 按钮类型
        type: {
            type: String,
            default: ''
        },
        // 按钮大小
        size: {
            type: String,
            default: 'normal'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {}
    },
    template: '<button class="el-button" :class="getClassName()" @click="clickShadowBtn"><i v-if="icon" :class="icon"></i><slot></slot></button>',
    methods: {
        getClassName: function () {
            return this.type + ' ' + this.size
        },
        clickShadowBtn: function () {
            console.log(1);
            //this.btnText = '加载中'
            // this.$emit方法不能使用驼峰命名的函数
            this.$emit('clickbtn')
        }
    }
});