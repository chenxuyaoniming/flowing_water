Component({
    properties: {
        dataList: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'val', // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {
        list: [
            {
                status: '已完成',
                price: '价格',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢谢谢谢',
                imageUrl: '/assets/images/cat.jpg'
            },
            {
                status: '已完成',
                price: '价格',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢谢谢谢',
                imageUrl: '/assets/images/cat.jpg'
            },
            {
                status: '已完成',
                price: '价格',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢你笑起来真好画一样哈哈哈哈谢谢',
                imageUrl: '/assets/images/cat.jpg'
            }
        ]
    }, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
        onTap: function () {
            this.setData({
                // 更新属性和数据的方法与更新页面数据的方法类似
            });
        }
    }
});