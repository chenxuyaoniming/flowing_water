/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo'),
        recommendList: [
            {
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
            }
        ]
    },
    onLoad() {
        // 监听页面加载的生命周期函数
    },
    getUserInfo(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
})
