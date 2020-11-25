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
            {"title": '教育', "url": '', "icon": 'bookmark-m'},
            {"title": '法律', "url": '', "icon": 'bookshelf-m'},
            {"title": '健康', "url": '', "icon": 'compress-m'},
            {"title": '情感', "url": '', "icon": 'hard-disk-m'},
            {"title": '职场', "url": '', "icon": 'recommend-m'},
            {"title": '金融', "url": '', "icon": 'subscribe-m'},
            {"title": '母婴', "url": '', "icon": 'hotel-m'},
            {"title": '更多', "url": '', "icon": 'recycle-m'},

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
        toColumn(e) {
            const {item} = e.target.dataset;
            item && swan.navigateTo({
                url:`/pages/columnist/columnist?title=${item.title}`
            })
        }
    }
});