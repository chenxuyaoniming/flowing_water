



Page({
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
                name: '夏张浩洛',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '全能王',
                id: 2,
                price: '370'
            },{
                name: '卡卡西',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '忍术一绝',
                id: 3,
                price: '80'
            },{
                name: '洛克·李',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '燃烧你的青春，哦耶',
                id: 4,
                price: '200'
            },{
                name: '夏洛',
                type: '情感',
                count: '2340',
                star: '4.0',
                solgan: '外事不决找百度，内事不决问夏洛',
                id: 5,
                price: '800'
            },{
                name: '夏洛',
                type: '情感',
                count: '100',
                star: '4.0',
                solgan: '外事不决找百度，内事不决问夏洛',
                id: 1,
                price: '200'
            }
        ]
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
        const {title} = this.options;
        title && swan.setNavigationBarTitle({
            title
        })
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
        console.log('sssss')
        swan.showLoading('.......')
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
});