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
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢谢谢谢',
                imageUrl: '/assets/images/cat.jpg'
            },
            {
                status: '已完成',
                price: '100',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢谢谢谢',
                imageUrl: '/assets/images/cat.jpg'
            },
            {
                status: '已完成',
                price: '30',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢你笑起来真好画一样哈哈哈哈谢谢',
                imageUrl: '/assets/images/cat.jpg'
            }
        ],
        list2: [
            {
                status: '待审核',
                price: '100',
                author: '高球',
                time: '2020-11-11',
                type: '股市',
                content: '太差了，你都没我懂',
                imageUrl: '/assets/images/dog.jpeg'
            },
            {
                status: '待退款',
                price: '100',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '你好菜啊',
                imageUrl: '/assets/images/cat.jpg'
            },
            {
                status: '已完成',
                price: '30',
                author: '高球',
                time: '2020-11-11',
                type: '情感',
                content: '谢谢谢你笑起来真好画一样哈哈哈哈谢谢',
                imageUrl: '/assets/images/dog.jpeg'
            },
            {
                status: '已完成',
                price: '30',
                author: '太乙',
                time: '2020-11-11',
                type: '情感',
                content: '啊朋友再见，啊朋友再见',
                imageUrl: '/assets/images/dog.jpeg'
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