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
        // 加载中
        loading: {
            type: Boolean,
            default: false
        }
    },
    template: '<button class="el-button" :class="[{\'is-loading\' : loading}, type, size]" @click="clickBtn"><i v-if="icon" :class="icon"></i><slot></slot></button>',
    methods: {
        clickBtn: function () {
            // this.$emit方法不能使用驼峰命名的函数
            this.$emit('clickbtn')
        }
    }
});