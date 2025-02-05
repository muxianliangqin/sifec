/*
里面所有的符号格式必须是英文格式的
数据格式说明：
[]:表示列表，是所有元素的集合
{}:表示字典，里面就是每个元素的所有信息，{}如果在中间位置，后面需要加英文逗号: ,
网络路径：网址，
本地路径：保存在和文件同一台电脑设备的路径，
如：./images/brisbane Cropped.jpeg"，./：文件的相同目录，images：一个叫images的文件夹，brisbane Cropped.jpeg：图片名称
其他：../：表示文件的上一级目录
如果需要删除数据，可以参照“邱越华”、“方惠莹”的处理，也可以彻底删除

荣誉成员数据：
{
    "order": "同一个level级别的显示排序",
    "src": "图片路径",
    "name": "姓名",
    "desc": "描述，<br>可以用于分行",
    "desc_span": "弃用",
    "col": "弃用",
    "category": "分类",
    "level": "二级分类",
    "level_span": "弃用",
    "level_desc": "分类描述"
},
秘书处数据：
{
    "order": "10",
    "src": "图片一路径",
    "src2": "图片二路径",
    "name": "姓名",
    "desc": "描述（已弃用）",
    "col": "合并列数（已弃用）",
    "category": "分类",
    "linkedin": "领英连接",
    "level_desc": "级别/职位描述"
}
 */

var category= [
    {
        'code': 'organization',
        'active': true,
        'name': '荣誉成员'
    }, {
        'code': 'council',
        'active': false,
        'name': '理事会'
    }, {
        'code': 'supervisors',
        'active': false,
        'name': '监事'
    }, {
        'code': 'secretariat',
        'active': false,
        'name': '秘书处'
    },
]

var data = [{
    "order": "18",
    "src": "./images/council/pengzhibing.jpg",
    "name": "彭志兵",
    "desc": "余彭年慈善基金会副理事长兼秘书长<br>余彭年管理（深圳）有限公司董事长兼总经理",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "16",
    "src": "./images/council/luchun.jpg",
    "name": "鲁  春",
    "desc": "南方科技大学总务长",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "14",
    "src": "./images/council/lianghuming.jpg",
    "name": "梁沪明",
    "desc": "深圳市南山区人大代表<br>中兴通讯股份有限公司副总裁",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "11",
    "src": "./images/council/caocong.jpg",
    "name": "曹  聪",
    "desc": "深圳市国际交流合作基金会常务秘书长、法人",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "17",
    "src": "./images/council/niebing.jpg",
    "name": "聂  冰",
    "desc": "深圳市交响乐团团长<br>深圳市音协副主席",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "12",
    "src": "./images/council/jiangan.jpg",
    "name": "姜  安",
    "desc": "深圳大学社会科学学院教授<br>深圳国际化发展战略研究中心主任",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "23",
    "src": "./images/council/zhouzhichen.jpg",
    "name": "周智琛",
    "desc": "深圳晚报社总经理<br>深圳晚报发展有限公司总经理",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "22",
    "src": "./images/council/zhangjionglong.jpg",
    "name": "张炯龙",
    "desc": "深圳市人大代表<br>威苏威投资（集团）有限公司董事长",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "13",
    "src": "./images/council/like.jpg",
    "name": "李  柯",
    "desc": "比亚迪股份有限公司高级副总裁<br>比亚迪美国分公司CEO",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "21",
    "src": "./images/council/yanxixiao.jpg",
    "name": "严锡晓",
    "desc": "深圳市乐富天智能科技有限公司董事长",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "19",
    "src": "./images/council/sunrongcong.jpg",
    "name": "孙荣聪",
    "desc": "香港工业总会青年委员会创会及荣誉主席<br>建乐士工业（深圳）有限公司董事、总经理",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "15",
    "src": "./images/council/liuhongying.jpg",
    "name": "刘红英",
    "desc": "深圳市政协委员<br>香港卓杰大中华有限公司董事",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "24",
    "src": "./images/council/zhushunhua.jpg",
    "name": "朱舜华",
    "desc": "深圳市政协委员<br>深圳市钟表行业协会会长<br>深圳市时间谷控股投资有限公司董事长",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "25",
    "src": "./images/council/zhuyanmei.jpg",
    "name": "朱岩梅",
    "desc": "深圳市政协委员<br>华大基因执行副总裁",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "20",
    "src": "./images/council/wangjianfeng.jpg",
    "name": "王建锋",
    "desc": "中视丰德影视版权代理有限公司董事长",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "10",
    "src": "./images/council/youzhonghui.jpg",
    "name": "游忠惠",
    "desc": "广东省政协委员<br>深圳市政协常委<br>拓维信息系统股份有限公司董事",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "9",
    "src": "./images/council/xiaoxia.jpg",
    "name": "萧  霞",
    "desc": "深圳市奥特迅电力设备股份有限公司董事长<br>深圳市女企业家商会会长",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "3",
    "src": "./images/council/huanghongsheng.jpg",
    "name": "黄宏生",
    "desc": "创维集团创始人",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "7",
    "src": "./images/council/taoyitao.jpg",
    "name": "陶一桃",
    "desc": "深圳大学中国经济特区研究中心主任<br>深圳大学 “一带一路” 研究院院长",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "2",
    "src": "./images/council/chenqingzhou.jpg",
    "name": "陈清州",
    "desc": "海能达通信股份有限公司董事长兼总裁<br>政协深圳市委员会委员",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "4",
    "src": "./images/council/linhui.jpg",
    "name": "林  慧",
    "desc": "深圳市商业联合会执行会长<br>深圳市深商总会执行会长",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "6",
    "src": "./images/council/shendan.jpg",
    "name": "沈  丹",
    "desc": "深圳市腾讯计算机系统有限公司党委副书记<br>公共政策部总经理",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "5",
    "src": "./images/council/qijia.jpg",
    "name": "齐    佳",
    "desc": "加拿大深圳社团联合总会主席<br>深圳市亚威信息科技集团有限公司董事长",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "8",
    "src": "./images/council/wanjie.jpg",
    "name": "万  捷",
    "desc": "雅昌文化集团董事长<br>全国政协委员",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "理事会"
}, {
    "order": "1",
    "src": "./images/council/wangshi.jpg",
    "name": "王石",
    "desc": "万科企业股份有限公司创始人、<br>董事会荣誉主席<br>万科公益基金会理事长",
    "col": "3",
    "category": "council",
    "level": "president",
    "level_desc": "主席"
}, {
    "order": "1",
    "name": "李丽蓉",
    "desc": "深圳市外办国际化促进处处长",
    "desc_span": "1",
    "category": "supervisors",
    "level_span": "2",
    "level_desc": "监事"
}, {
    "order": "2",
    "name": "于秀峰",
    "desc": "北京德恒（深圳）律师事务所",
    "desc_span": "1",
    "category": "supervisors",
    "level_span": "0",
    "level_desc": "监事"
}, {
    "order": "1",
    "src": "./images/secretariat/CaoCong-1.jpg",
    "src2": "./images/secretariat/CaoCong-2-min.jpeg",
    "name": "曹聪",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/cong-cao-95125b154/",
    "level_desc": "常务秘书长"
}, {
    "order": "2",
    "src": "./images/secretariat/LiManshu-1.jpg",
    "src2": "./images/secretariat/LiManShu2-min.jpg",
    "name": "李曼书",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E6%9B%BC%E4%B9%A6-%E6%9D%8E-07a885172/",
    "level_desc": "副秘书长"
}, {
    "order": "3",
    "src": "./images/secretariat/Yangle-1.jpg",
    "src2": "./images/secretariat/YangLe-min.jpg",
    "name": "杨乐",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E4%B9%90-%E6%9D%A8-652aa7163/",
    "level_desc": "副秘书长"
}, {
    "order": "4",
    "src": "./images/secretariat/GuoHang-min.jpeg",
    "src2": "./images/secretariat/GuoHang.jpeg",
    "name": "郭航",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/hangguo/",
    "level_desc": "“CityPlus城市+”项目总监"
}, {
    "order": "5",
    "src": "./images/secretariat/CaiFeng-min.jpeg",
    "src2": "./images/secretariat/CaiFeng2-min.jpeg",
    "name": "蔡锋",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/feng-cai-1800a9119/",
    "level_desc": "“深系澜湄”项目总监"
}, {
    "order": "6",
    "src": "./images/secretariat/Zhang Meng Ya1-min.jpg",
    "src2": "./images/secretariat/ZhangMengYa2-min.jpg",
    "name": "张梦雅",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/mzhang1130/",
    "level_desc": "品牌宣传部总监"
}, {
    "order": "7",
    "src": "./images/secretariat/ZhongYuTing-min.jpeg",
    "src2": "./images/secretariat/ZhongYuTing2.jpeg",
    "name": "钟玉婷",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/wendyzhong321/",
    "level_desc": "合作发展部总监"
}, {
    "order": "8",
    "src": "./images/secretariat/YaoYuXin-min.jpeg",
    "src2": "./images/secretariat/YaoYuXin2.jpeg",
    "name": "姚雨昕",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E9%9B%A8%E6%98%95-%E5%A7%9A-0757b916b/",
    "level_desc": "综合部总监"
}, {
    "order": "9",
    "src": "./images/secretariat/ChenTian-min.jpg",
    "src2": "./images/secretariat/ChenTian2-min.jpg",
    "name": "陈恬",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/viola-chen/",
    "level_desc": "“CityPlus城市+”项目主管"
}, {
    "order": "10",
    "src": "./images/secretariat/HuangLiXuan-min.jpg",
    "src2": "./images/secretariat/HuangLiXuan2-min.jpg",
    "name": "黄丽璇",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E4%B8%BD%E7%92%87-%E9%BB%84-109761160/",
    "level_desc": "综合部官员"
},
//     {
//     "order": "11",
//     "src": "./images/secretariat/QiuYuaHua-min.jpeg",
//     "src2": "./images/secretariat/QiuYueHua2-min.jpeg",
//     "name": "邱越华",
//     "desc": "",
//     "col": "3",
//     "category": "secretariat",
//     "linkedin": "https://www.linkedin.com/in/%E8%B6%8A%E5%8D%8E-%E9%82%B1-5577a3101/",
//     "level_desc": "综合部官员"
// },
    {
    "order": "12",
    "src": "./images/secretariat/HuangYaLing-min.jpg",
    "src2": "./images/secretariat/HuangYaLing2-min.jpg",
    "name": "黄雅铃",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/ya-lin-huang-594224b8/",
    "level_desc": "“CityPlus城市+”项目官员"
},
//     {
//     "order": "13",
//     "src": "./images/secretariat/FangHuiYing-min.jpeg",
//     "src2": "./images/secretariat/FangHuiYing2-min.jpeg",
//     "name": "方惠莹",
//     "desc": "",
//     "col": "3",
//     "category": "secretariat",
//     "linkedin": "https://www.linkedin.com/in/huiying-freya-fang-00667b168/",
//     "level_desc": "“深系澜湄”项目官员"
// },
    {
    "order": "14",
    "src": "./images/secretariat/WangYingYu-min.jpeg",
    "src2": "./images/secretariat/WangYingYu2-min.jpeg",
    "name": "王颖瑜",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/yingyu-wang-913275131/",
    "level_desc": "合作发展部官员"
}, {
    "order": "15",
    "src": "./images/secretariat/WuJingsi-1.jpg",
    "src2": "./images/secretariat/WuJingsi-2.jpg",
    "name": "吴靖思",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/jingsiwu",
    "level_desc": "品牌宣传部官员"
}, {
    "order": "8",
    "name": "余彭年",
    "desc": "深圳彭年酒店   董事长",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "7",
    "name": "关恩赐",
    "desc": "澳门华国旅游社有限公司    董事长总经理",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "6",
    "name": "古少明",
    "desc": "宝鹰集团    董事局主席",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "5",
    "name": "马介璋",
    "desc": "佳宁娜集团控股有限公司    名誉主席",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "11",
    "level_desc": "荣誉副会长"
}, {
    "order": "1",
    "src": "./images/chairman/chenshiyi.jpg",
    "name": "陈十一",
    "desc": "南方科技大学校长",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "4",
    "level_desc": "荣誉会长"
}, {
    "order": "4",
    "src": "./images/chairman/tanglixia.jpg",
    "name": "汤丽霞",
    "desc": "原深圳市人民政府外事办主任",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "荣誉会长"
}, {
    "order": "2",
    "src": "./images/chairman/langlang.jpg",
    "name": "郎朗",
    "desc": "国际钢琴巨星",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "荣誉会长"
}, {
    "order": "3",
    "src": "./images/chairman/maweihua.jpg",
    "name": "马蔚华",
    "desc": "中国企业家俱乐部理事长<br>招商银行前行长兼CEO",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "荣誉会长"
}, {
    "order": "9",
    "name": "林重成",
    "desc": "银盛金融集团 董事局主席",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "10",
    "name": "钟百胜",
    "desc": "腾邦物流股份有限公司",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "11",
    "name": "赵心竹",
    "desc": "深圳市中意集团有限公司 董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "12",
    "name": "梁锡光",
    "desc": "深圳国威电子有限公司 董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "13",
    "name": "黄伟",
    "desc": "深圳市新世界集团有限公司 董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "14",
    "name": "黄宏生",
    "desc": "创维集团 董事局主席",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "15",
    "name": "邓鹏",
    "desc": "优必选科技有限公司 执行董事",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "荣誉副会长"
}, {
    "order": "16",
    "name": "马鸿铭",
    "desc": "佳宁娜集团控股有限公司 执行董事",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "5",
    "level_desc": "荣誉理事"
}, {
    "order": "17",
    "name": "方曼荻",
    "desc": "华运国际物流有限公司 总裁",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "荣誉理事"
}, {
    "order": "18",
    "name": "区绮文",
    "desc": "深圳市玛莎嘉儿连锁实业有限公司 董事总经理",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "荣誉理事"
}, {
    "order": "19",
    "name": "庄陆坤",
    "desc": "深圳市百佳华实业有限公司董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "荣誉理事"
}, {
    "order": "20",
    "name": "吴荣基",
    "desc": "深圳市大鹏新区大鹏工商联（商会） 永远名誉会长",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "荣誉理事"
}, {
    "order": "21",
    "name": "王岚",
    "desc": "深圳市中航健身时尚股份有限公司 董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "member",
    "level_span": "2",
    "level_desc": "荣誉会员"
}, {
    "order": "22",
    "name": "李友健",
    "desc": "童心飞扬股份有限公司 董事长",
    "desc_span": "1",
    "category": "organization",
    "level": "member",
    "level_span": "0",
    "level_desc": "荣誉会员"
}, {
    "order": "23",
    "name": "福田区政府",
    "desc": "各区外办负责",
    "desc_span": "10",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "10",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "24",
    "name": "罗湖区政府",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "25",
    "name": "盐田区政府",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "26",
    "name": "南山区政府",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "27",
    "name": "宝安区政府",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "28",
    "name": "龙岗区政府",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "29",
    "name": "光明新区管委会",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "30",
    "name": "坪山新区管委会",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "31",
    "name": "龙华新区管委会",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "32",
    "name": "大鹏新区管委会",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会长单位"
}, {
    "order": "33",
    "name": "万科企业股份有限公司",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "12",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "34",
    "name": "比亚迪股份有限公司",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "35",
    "name": "深圳职业技术学院",
    "desc": "校长：刘洪一",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "36",
    "name": "深圳信息职业技术学院",
    "desc": "校长：邢锋",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "37",
    "name": "深圳市地铁集团有限公司",
    "desc": "国资委对接",
    "desc_span": "7",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "38",
    "name": "深圳市远致投资有限公司",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "39",
    "name": "深圳机场集团",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "40",
    "name": "深圳市盐田港集团有限公司",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "41",
    "name": "深圳市投资控股有限公司",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "42",
    "name": "深圳市海云天投资控股有限公司",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "43",
    "name": "深圳市能源集团股份有限公司",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "44",
    "name": "深圳乐土生命科技投资有限公司",
    "desc": "国资委对接",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>副会长单位"
}, {
    "order": "45",
    "name": "深圳大学",
    "desc": "校长：阮双琛",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member_unit",
    "level_span": "2",
    "level_desc": "荣誉<br>理事单位"
}, {
    "order": "46",
    "name": "深圳一电科技有限公司",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>理事单位"
}, {
    "order": "47",
    "name": "深圳市南方航空股份有限公司",
    "desc": "总经理：刘国军",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "4",
    "level_desc": "荣誉<br>会员单位"
}, {
    "order": "48",
    "name": "深圳工业行业设计协会",
    "desc": "秘书长：封昌红",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会员单位"
}, {
    "order": "49",
    "name": "三诺数码集团有限公司",
    "desc": "董事长：刘志雄",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会员单位"
}, {
    "order": "50",
    "name": "深圳市英威腾电气股份有限公司",
    "desc": "董事长：黄申力",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "荣誉<br>会员单位"
}]
