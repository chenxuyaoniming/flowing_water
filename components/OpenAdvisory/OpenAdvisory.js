Component({
    properties: {
        advisory: { // 属性名
            type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: {}, // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        },
        toListen() {
            swan.showModal({
                title: '提示',
                content: '您是否确认旁听此咨询？',
                success: function(res) {
                    res.confirm && swan.navigateTo({
                        url: '/pages/index/index'
                    })
                },
            })
        }
    }
});