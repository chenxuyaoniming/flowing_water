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
        recommendList: [
            {
                name: '夏洛',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '外事不决找百度，内事不决问夏洛',
                id: 1,
                price: '200'
            },
            {
                name: '夏洛',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '外事不决找百度，内事不决问夏洛',
                id: 1,
                price: '200'
            },{
                name: '夏洛',
                type: '情感',
                count: '100',
                star: '4.0',
                solgn: '外事不决找百度，内事不决问夏洛',
                id: 1,
                price: '200'
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
        },
        toExperts() {
            swan.navigateTo({
                url: '/pages/experts/experts'
            })
        }
    }
});