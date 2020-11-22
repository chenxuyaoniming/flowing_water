Page({
    data: {
        current: 1,
        tabList: [
            {label: '主页', id: 1},
            {label: '文章', id: 2}
        ],
        description: '夏洛：男，生于1988年1月，现任BAT心理咨询事务所1级咨询师。本科毕业于东南大学心理学专业，硕士毕业于昆士兰大学心理学专业。从业5年，帮助17对情侣、夫妻成功挽回情感',
        commentList: [
            {
                author: '夏洛',
                time: '2020-11-11',
                content: '春风吹又生那个啊',
                star: [1,2,3,4,5]
            },
            {
                author: '夏洛',
                time: '2020-11-11',
                content: '春风吹又生那个啊',
                star: [1,2,3,4,5]

            },            {
                author: '夏洛',
                time: '2020-11-11',
                content: '春风吹又生那个啊春春风吹又生那个啊风吹又生那个啊春风吹又生那个啊',
                star: [1,2,3,4,5]

            }
        ],
        advisoryList: [
            {
                content: '生于1988年1月，现任BAT心理咨询事务所1级咨询师。本科毕业于东南大学心理学专业，硕士毕业于昆士兰大学心理学专业。从业5年，帮助17对情侣、夫妻成功挽回情感',
                price: 11,
                supportCount: 102,
                listen: 666
            },
            {
                content: '生于1988年1月，现任BAT心理咨询事务所1级咨询师。本科毕业于东南大学心理学专业，硕士毕业于昆士兰大学心理学专业。从业5年，帮助17对情侣、夫妻成功挽回情感',
                price: 11,
                supportCount: 102,
                listen: 666
            }
        ]
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    tabhandlerchange(e) {
        const id = e.target.dataset.id;
        this.setData({
            current: id
        })
    }
});