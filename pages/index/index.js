/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Page({
    data: {
        slider: [
            // '/assets/images/banner1.jpg',
            // '/assets/images/banner2.jpg',
            '/assets/images/banner3.jpg',
            '/assets/images/banner4.jpg'
        ],
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo'),
        recommendList: [
            {
                name: '黄柯庆',
                // type: '情感',
                imgUrl: '/assets/images/expert2.jpg',
                count: '100',
                star: '9.7',
                solgan: '前500强董事总经理',
                id: 3,
                price: '80',
                tips: [
                    '如何走出职场困境',
                    '如何实现职场转型'
                ],
                goods: [
                    '职业规划',
                    '职场转型',
                    '专业晋升',
                ]
            },{
                name: '刘学亮',
                // type: '情感',
                imgUrl: '/assets/images/expert1.jpg',
                count: '100086',
                star: '8.5',
                solgan: '北大法学系 20年法律实战经验',
                id: 4,
                price: '200',
                goods: [
                    '股权安排，买卖，公司重组（股权重组）',
                    '商务合同，股权如何分配'
                ],
                tips: [
                    '团队搭建',
                    '股权分配',
                    '创业经验'
                ]
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
