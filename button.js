
Vue.component('el-button', {
    props: {
        // 组件文字
        btnText: {
            title: String,
            default: '标题'
        },
        // 组件图标
        icon: {
            type: String,
            default: ''
        },
        // 组件类型
        type: {
            type: String,
            default: 'blue'
        },
        // 组件大小
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
    template: '<button class="elButton" :class="getClassName()" @click="clickShadowBtn"><i v-if="icon" :class="icon"></i>{{btnText}}</button>',
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