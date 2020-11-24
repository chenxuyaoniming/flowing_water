Page({
    data: {
        chatList: [
            {
                author: '夏洛',
                imageUrl: '/assets/images/dog.jpeg',
                content: '十里寒塘路，烟花一半醒。晨钟催落月，宿火乱稀星。',
                id: 1,
            },
            {
                author: '张伟',
                imageUrl: '/assets/images/cat.jpg',
                content: '历经万般红尘劫，犹如凉风轻拂面。',
                id: 2,
            },
            {
                author: '荔枝',
                imageUrl: '/assets/images/dog.jpeg',
                content: '君臣一梦，今古空名。但远山长，云山乱，晓山青。',
                id: 3,
            },
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
    toChat(e) {
        const {id, author} = e.target.dataset.item;
        swan.navigateTo({
            url: `/pages/chatRoom/chatRoom?id=${id}&name=${author}`
        })
    }
});