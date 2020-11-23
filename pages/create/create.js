import mobx from "../../utils/globalData";


Page({
    data: {
        content: '',
        imageList: ["bdfile://tmp/1606134319909901.jpeg"],
        price: 0,
        isSearch: false
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数

    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
        console.log(mobx.getInfo(), 'mobx')
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
    delImage(e) {
        const idx = e.target.dataset.id;
        this.data.imageList.splice(idx, 1);
        this.setData({
            imageList: [...this.data.imageList]
        })
    },
    chooseImage() {
        const _ = this;
        swan.chooseImage({
            count: 5,
            success(res) {
                if (res.tempFilePaths) {
                    _.setData({
                        imageList: [..._.data.imageList,...res.tempFilePaths]
                    })
                }
            }
        })
    },
    success() {
        if (!this.data.content && !this.data.imageList.length && !this.data.price) {
            swan.showModal({
                title: '提示',
                content: '请输入完整内容后再提交',
                showCancel: false
            })
            return;
        }
        this.setData({
            isSearch: true
        })
        swan.showLoading({
            title: '正在发布...'
        })
        setTimeout(() => {
            swan.hideLoading();
            swan.navigateTo({
                url: '/pages/index/index'
            });
            mobx.setInfo({
                content: this.data.content,
                imageList: this.data.imageList,
                price: this.data.price
            })
            this.setData({
                isSearch: false
            })
            swan.showToast({
                title: '发布成功',
                icon: 'success',
            })
        }, 2000);
    },
    cancel() {
        swan.navigateBack({
            delta: 1
        })
    }
});