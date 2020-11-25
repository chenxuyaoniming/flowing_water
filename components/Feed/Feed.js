Component({
    properties: {
        propName: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'val', // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {
        feedList: [
            {
                title: '股市风云录——为什么蛋壳股价会触底反弹',
                videoUrl: '',
                imageUrl: '/assets/images/cat.jpg',
                createBy: '12',
                commentCount: '200',
                author: '夏鲁普'
            },
            {
                title: '他还爱我吗他还爱我吗他还爱我吗他还爱我吗他还爱我吗他还爱我吗他还爱我吗',
                videoUrl: '',
                // imageUrl: '/assets/images/cat.jpg',
                createBy: '12',
                commentCount: '200',
                author: '咕噜'
            },
            {
                title: '春天在哪里，春天在这里啊',
                videoUrl: '',
                // imageUrl: '/assets/images/cat.jpg',
                createBy: '12',
                commentCount: '200',
                author: '小燕子'
            },
            {
                title: '特斯拉怎么样',
                videoUrl: '',
                // imageUrl: '/assets/images/cat.jpg',
                createBy: '12',
                commentCount: '200',
                author: '股票大神'
            },
            {
                title: '他还爱我吗',
                videoUrl: '',
                imageUrl: '/assets/images/dog.jpeg',
                createBy: '12',
                commentCount: '10',
                author: '西西卡'
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