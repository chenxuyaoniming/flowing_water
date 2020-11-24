Page({
    data: {
        personImage: '/assets/images/cat.jpg',
        value: "",
        chatList: [
            {
                author: '夏洛',
                content: '我亦可贪恋烟火，殷实人家，几间瓦房，四方小院，守着流年，幸福安康',
                imageUrl: '/assets/images/dog.jpeg'
            },
            {
                author: '',
                content: '十里寒塘路，烟花一半醒。晨钟催落月，宿火乱稀星。',
                imageUrl: '/assets/images/cat.jpg'
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
        // this.options do something
        if (this.options) {
            swan.setTopBarText({text: this.options.name})
        }
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
    setValue(e) {
        const {value} = e.detail;
        this.setData({
            value: value
        })
    },
    send() {
        if (!this.data.value) {
            return;
        };
        const newChat = {content: this.data.value, imageUrl: this.data.personImage}
        this.setData({
            chatList: [...this.data.chatList, newChat],
        });
        this.setData({
            value: ''
        })
    }
});