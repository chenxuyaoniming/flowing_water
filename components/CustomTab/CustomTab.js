Component({
    properties: {
        current: { // 属性名
            type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 1, // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {
        routes: [
            {
                path: '/pages/index/index',
                title: '首页',
                id: 1

            },{
                path: '/pages/square/square',
                title: '广场',
                id: 2

            },
            {
                path: '/pages/release/release',
                title: '+',
                id: 3
            },
            {
                path: '/pages/message/message',
                title: '消息',
                id: 4
            },
            {
                path: '/pages/person/person',
                title: '我的',
                id: 5
            }
        ]
    }, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {

        console.log(this, 'this:::')
    },

    detached: function () {},
    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        },
        taphandler(e) {
            const url = e.target.dataset.url;
            swan.navigateTo({
                url
            });
        }
    }
});