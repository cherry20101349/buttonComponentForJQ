Vue.component('el-button', {
    render: function (h) {
        return h('button',
            {
                'class': [{'is-loading': this.loading}, this.type, this.size, 'el-button'],
                on: {
                    click: this.clickBtn
                }
            },
            [
                this.loading || this.icon ? h('i', {}) : '',
                this.$slots.default
            ]
        )
    },
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
    methods: {
        clickBtn: function () {
            // this.$emit方法不能使用驼峰命名的函数
            this.$emit('clickbtn');
        }
    }
});