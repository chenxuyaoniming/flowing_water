const app = getApp()

Page({
    data: {
        tabs: [{
            name: '1',
            label: '我的咨询'
        }, {
            name: '2',
            label: '我的投诉'
        }],
        content: '1',
        activeNameOne: '1',
        list1: [
            {
                status: '已完成',
                price: '200',
                author: '李林',
                time: '2020-11-11',
                type: '职场咨询',
                content: '坚持自己，不要同流合污',
                imageUrl: '/assets/images/expert1.jpg'
            },
            {
                status: '已完成',
                price: '100',
                author: '刘梓林',
                time: '2020-11-11',
                type: '情感',
                content: '您说的太好了，非常感谢',
                imageUrl: '/assets/images/expert2.jpg'
            },
            {
                status: '咨询中',
                price: '30',
                author: '李志成',
                time: '2020-11-11',
                type: '商业合同',
                content: '稍等，我五分钟后联系您',
                imageUrl: '/assets/images/expert1.jpg'
            }
        ],
        list2: [
            {
                status: '待审核',
                price: '100',
                author: '高球',
                time: '2020-11-11',
                type: '股市',
                content: '抱歉，找错人了',
                imageUrl: '/assets/images/expert3.jpg'
            },
            {
                status: '待退款',
                price: '100',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '您好，在吗',
                imageUrl: '/assets/images/expert1.jpg'
            },
            {
                status: '已完成',
                price: '30',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '你刚刚的说法，我不同意',
                imageUrl: '/assets/images/expert1.jpg'
            },
            {
                status: '已完成',
                price: '30',
                author: '太乙',
                time: '2020-11-11',
                type: '情感',
                content: '欢迎您下次咨询',
                imageUrl: '/assets/images/expert2.jpg'
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
        console.log(app, 'app:::')
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
    tabsOne(e) {
        this.setData({
            content: e.detail.name,
            activeNameOne: e.detail.name
        })
    }
});