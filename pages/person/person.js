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
        activeNameOne: '1'
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