



Page({
    data: {
        nav_list: [
            '全部',
            '项目管理',
            '转型之路',
            '职业规划',
            '面试简历',
        ],
        recommendList: [
            {
                name: '叶檀',
                // type: '情感',
                imgUrl: '/assets/images/yt.JPG',
                count: '100',
                star: '9.7',
                solgan: '人生规划导师 知名财经评论家',
                id: 3,
                price: '300',
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
            },{
                name: '王文彬',
                // type: '情感',
                imgUrl: '/assets/images/expert3.jpg',
                count: '286',
                star: '8.5',
                solgan: 'CEO潜能教练，艾迪无线CEO',
                id: 4,
                price: '200',
                goods: [
                    '潜能教练 | 人人都需要的一趟潜能课',
                    '成长教练 | 如何喜悦活在当下'
                ],
                tips: [
                    '生活服务',
                    '职场发展',
                    '沟通'
                ]
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