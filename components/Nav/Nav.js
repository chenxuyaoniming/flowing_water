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
        navList: [
            {"title": '教育', "url": '', "icon": ''},
            {"title": '法律', "url": '', "icon": ''},
            {"title": '健康', "url": '', "icon": ''},
            {"title": '情感', "url": '', "icon": ''},
            {"title": '职场', "url": '', "icon": ''},
            {"title": '金融', "url": '', "icon": ''},
            {"title": '母婴', "url": '', "icon": ''},
            {"title": '更多', "url": '', "icon": ''},

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