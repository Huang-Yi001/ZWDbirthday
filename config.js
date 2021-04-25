// 2021年04月26日 
var config = {
    // 每句话尽量不要超过15个字
    texts: [
        "呐，恭喜你找到它啦",      //英文逗号
        "时光荏苒",
        "白驹过隙",
        "转眼你就二十岁啦",
        "多多同学",
        "今天是你的生日",
        "希望在崭新的日子里",
        "你能拥有明确的爱",
        "直接的厌恶",
        "站在太阳下的坦荡",
        "真诚的喜欢",
        "和大声无愧地称赞自己",
        "               ",
        "愿夜海有遗失的繁星陪你",
        "黎明有散落的云",
        "               ",       
        "愿你是送花香的风啊",
        "浪漫而自由",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "呐，恭喜你找到它啦": "./imgs/1.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "准备开始啦",
        play: "音乐起",
        bannar_coming: "色彩来",
        balloons_flying: "是不是还少点东西呀",
        cake_fadein: "蛋糕在哪呢？",
        light_candle: "还差蜡烛呀？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
