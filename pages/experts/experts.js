Page({
    data: {
        current: 1,
        tips: [
            '职场大师',
            '跳槽，如何越跳越高',
            '优势辅导, 助你快速进阶'
        ],
        tabList: [
            {label: '主页', id: 1},
            {label: '文章', id: 2}
        ],
        description: '本人现任BAT心理咨询事务所1级咨询师。本科毕业于东南大学心理学专业，硕士毕业于昆士兰大学心理学专业',
        commentList: [
            {
                author: '夏洛',
                time: '2020-11-11',
                content: '老师授课认真，细致，能充分利用时间，对重点知识的讲解十分清晰易懂',
                imgUrl: '/assets/images/expert3.jpg',
                star: [1,2,3,4,5]
            },
            {
                author: '夏洛',
                time: '2020-11-11',
                imgUrl: '/assets/images/expert1.jpg',
                content: '老师很专业，让我对未来的道路更清晰了！',
                star: [1,2,3,4,5]

            },            {
                author: '夏洛',
                time: '2020-11-11',
                imgUrl: '/assets/images/expert1.jpg',
                content: '如果早点遇到老师就好了，少走很多弯路',
                star: [1,2,3,4,5]

            }
        ],
        advisoryList: [
            {
                content: '办公室里有A B C D四名员工，其中A平时喜欢喝茶叶水，而且喜欢把剩下的茶叶水倒进饮水机旁边的水桶里。过了一段时间以后水桶就满了，里面全是黑色的茶叶。B C D三名员工平时喝白开水，而且也从来不往水桶里面倒剩水。有一天领导发现水桶里面很脏，召集大家开会要求轮流值日倒水桶。',
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
    },
    toChat() {
        swan.navigateTo({
            url: '/pages/chatRoom/chatRoom?name=张天成'
        })
    }
});