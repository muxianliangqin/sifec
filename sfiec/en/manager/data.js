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
其中级别为以下几类的
"level": "chairman",
"level": "vice"
"level": "member"
添加了tip文字提示功能，如果描述文字太长，可以添加tip属性，原desc属性内容可适当缩减，
添加后鼠标移动到描述文字上即可看到文字提示内容
已有的示例是随便修改的，具体内容请自行确定
 */

var category= [
    {
        'code': 'organization',
        'active': true,
        'name': 'Honorary Series'
    }, {
        'code': 'council',
        'active': false,
        'name': 'Board of Trustees'
    }, {
        'code': 'supervisors',
        'active': false,
        'name': 'Trustees'
    }, {
        'code': 'secretariat',
        'active': false,
        'name': 'Secretariat'
    },
]

var data = [{
    "order": "18",
    "src": "./images/council/pengzhibing.jpg",
    "name": "PENG Zhibing",
    "desc": "Executive Secretary General, Yu Panglin Charity Foundation<br>Chairman, Panglin Group",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "16",
    "src": "./images/council/luchun.jpg",
    "name": "LU Chun",
    "desc": "Vice President, Southern University of Science and Technology",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "14",
    "src": "./images/council/lianghuming.jpg",
    "name": "LIANG Huming",
    "desc": "Vice President, ZTE Corporation",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "11",
    "src": "./images/council/caocong.jpg",
    "name": "CAO Cong",
    "desc": "Executive Secretary General, Shenzhen ...",
    "tip": "Executive Secretary General, Shenzhen Foundation for International Exchange and Cooperation",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "17",
    "src": "./images/council/niebing.jpg",
    "name": "NIE Bing",
    "desc": "President, Shenzhen Symphony Orchestra",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "12",
    "src": "./images/council/jiangan.jpg",
    "name": "JIANG An",
    "desc": "Director, Shenzhen Internationalization Development Strategy Research Center",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "23",
    "src": "./images/council/zhouzhichen.jpg",
    "name": "ZHOU Zhichen",
    "desc": "General Manager, Shenzhen Evening News Office",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "22",
    "src": "./images/council/zhangjionglong.jpg",
    "name": "ZHANG Jionglong",
    "desc": "Chairman, Shenzhen Sayesmed Medical Technology Ltd.",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "13",
    "src": "./images/council/like.jpg",
    "name": "LI Ke",
    "desc": "Senior Vice President, BYD Company Ltd.",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "21",
    "src": "./images/council/yanxixiao.jpg",
    "name": "YAN Xixiao",
    "desc": "Co-Founder & CEO, Shenzhen Loftynn Intelligence Co., Ltd.",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "19",
    "src": "./images/council/sunrongcong.jpg",
    "name": "SUN Rongcong",
    "desc": "Managing Director, Kinox Trading Ltd.",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "15",
    "src": "./images/council/liuhongying.jpg",
    "name": "LIU Hongying",
    "desc": "General Manger, InnovMac Information Technology Ltd...",
    "tip": "General Manger, InnovMac Information Technology Ltd.<br>Member, Standing Committee of Shenzhen People's Congress",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "24",
    "src": "./images/council/zhushunhua.jpg",
    "name": "ZHU Shunhua",
    "desc": "Member, Shenzhen Committee of CPPCC<br>President, Shenzhen Watch & Clock Association",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "25",
    "src": "./images/council/zhuyanmei.jpg",
    "name": "ZHU Yanmei",
    "desc": "Member , Shenzhen Committee of CPPCC <br>Executive Director, Executive Vice President & CHO, BGI Headquarters",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "20",
    "src": "./images/council/wangjianfeng.jpg",
    "name": "WANG Jianfeng",
    "desc": "Chairman, China Fengde Movie and TV Copyright Agency",
    "col": "3",
    "category": "council",
    "level": "member",
    "level_desc": "理事会"
}, {
    "order": "10",
    "src": "./images/council/youzhonghui.jpg",
    "name": "YOU Zhonghui",
    "desc": "Member, The 11th & 12th Guangdong & Shenzhen ...<br>Director ...",
    "tip": "Member, The 11th & 12th Guangdong & Shenzhen Committee of CPPCC<br>Director, Talkweb Information System Co., Ltd",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "9",
    "src": "./images/council/xiaoxia.jpg",
    "name": "XIAO Xia",
    "desc": "Chairman & General Manager...<br>Executive President, Shenzhen ...",
    "tip": "Chairman & General Manager, Shenzhen Auto Electric Power Plant Co., Ltd.<br>Executive President, Shenzhen Women's Chamber of Commerce",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "3",
    "src": "./images/council/huanghongsheng.jpg",
    "name": "HUANG Hongsheng",
    "desc": "Founder, Skyworth Group Co.,Ltd.",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "7",
    "src": "./images/council/taoyitao.jpg",
    "name": "TAO Yitao",
    "desc": "Director, China Center for Special Economic Zone Research...",
    "tip": "Director, China Center for Special Economic Zone Research<br>Dean, Shenzhen University 'Belt and Road' Institute",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "2",
    "src": "./images/council/chenqingzhou.jpg",
    "name": "CHEN Qingzhou",
    "desc": "Chairman & President, Hytera Communications Corporation Ltd.",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "4",
    "src": "./images/council/linhui.jpg",
    "name": "LIN Hui",
    "desc": "Executive President, Shenzhen General Chamber of Commerce",
    "tip": "Executive President, Shenzhen General Chamber of Commerce<br>Executive President, Federation Of Shenzhen Commerce",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "6",
    "src": "./images/council/shendan.jpg",
    "name": "SHEN Dan",
    "desc": "Deputy Party Secretary, General Manager of Public Policy Department, Tencent",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "5",
    "src": "./images/council/qijia.jpg",
    "name": "QI Jia",
    "desc": "Chairperson, Canada Confederation of Shenzhen Associations",
    "tip": "Chairperson, Canada Confederation of Shenzhen Associations<br>Chairperson, Shenzhen Yawei Information Science Group Co., Ltd.",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "8",
    "src": "./images/council/wanjie.jpg",
    "name": "WAN Jie",
    "desc": "Chairman, Artron Art Group",
    "col": "3",
    "category": "council",
    "level": "vice",
    "level_desc": "Vice Chairman"
}, {
    "order": "1",
    "src": "./images/council/wangshi.jpg",
    "name": "WANG Shi",
    "desc": "Founder & Honorary Chairman, China Vanke Co.,Ltd.<br>Chairman, Vanke Foundation",
    "col": "3",
    "category": "council",
    "level": "president",
    "level_desc": "Chariman"
}, {
    "order": "1",
    "name": "LI Lirong",
    "desc": "Division Director of Shenzhen Foreign Affairs Office",
    "desc_span": "1",
    "category": "supervisors",
    "level_span": "2",
    "level_desc": "Trustee"
}, {
    "order": "2",
    "name": "YU Xiufeng",
    "desc": "Deheng Law Office, Shenzhen",
    "desc_span": "1",
    "category": "supervisors",
    "level_span": "0",
    "level_desc": "Trustee"
}, {
    "order": "1",
    "src": "./images/secretariat/CaoCong-1.jpg",
    "src2": "./images/secretariat/CaoCong-2-min.jpeg",
    "name": "CAO Cong",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/cong-cao-95125b154/",
    "level_desc": "Executive Secretary General"
}, {
    "order": "2",
    "src": "./images/secretariat/LiManshu-1.jpg",
    "src2": "./images/secretariat/LiManShu2-min.jpg",
    "name": "LI Manshu",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E6%9B%BC%E4%B9%A6-%E6%9D%8E-07a885172/",
    "level_desc": "Deputy Secretary General"
}, {
    "order": "3",
    "src": "./images/secretariat/Yangle-1.jpg",
    "src2": "./images/secretariat/YangLe-min.jpg",
    "name": "Yang Le",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E4%B9%90-%E6%9D%A8-652aa7163/",
    "level_desc": "Deputy Secretary General"
}, {
    "order": "4",
    "src": "./images/secretariat/CaiFeng-min.jpeg",
    "src2": "./images/secretariat/CaiFeng2-min.jpeg",
    "name": "CAI Feng",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/feng-cai-1800a9119/",
    "level_desc": "Director, Cooperation & Development"
}, {
    "order": "5",
    "src": "./images/secretariat/Zhang Meng Ya1-min.jpg",
    "src2": "./images/secretariat/ZhangMengYa2-min.jpg",
    "name": "ZHANG Mengya",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/mzhang1130/",
    "level_desc": "Project Director, CityPlus"
}, {
    "order": "6",
    "src": "./images/secretariat/ZhongYuTing-min.jpeg",
    "src2": "./images/secretariat/ZhongYuTing2.jpeg",
    "name": "ZHONG Yuting",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/wendyzhong321/",
    "level_desc": "Project Director, S x LM Initiative"
}, {
    "order": "7",
    "src": "./images/secretariat/YaoYuXin-min.jpeg",
    "src2": "./images/secretariat/YaoYuXin2.jpeg",
    "name": "YAO Yuxin",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E9%9B%A8%E6%98%95-%E5%A7%9A-0757b916b/",
    "level_desc": "Director, Finance & Administration"
}, {
    "order": "8",
    "src": "./images/secretariat/ChenTian-min.jpg",
    "src2": "./images/secretariat/ChenTian2-min.jpg",
    "name": "CHEN Tian",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/viola-chen/",
    "level_desc": "Project Manager, CityPlus"
}, {
    "order": "9",
    "src": "./images/secretariat/HuangLiXuan-min.jpg",
    "src2": "./images/secretariat/HuangLiXuan2-min.jpg",
    "name": "HUANG Lixuan",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/%E4%B8%BD%E7%92%87-%E9%BB%84-109761160/",
    "level_desc": "Officer,  Finance & Administration"
},
    {
    "order": "10",
    "src": "./images/secretariat/HuangYaLing-min.jpg",
    "src2": "./images/secretariat/HuangYaLing2-min.jpg",
    "name": "HUANG Yalin",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/ya-lin-huang-594224b8/",
    "level_desc": "Project Officer, CityPlus"
},
    {
    "order": "11",
    "src": "./images/secretariat/WangYingYu-min.jpeg",
    "src2": "./images/secretariat/WangYingYu2-min.jpeg",
    "name": "WANG Yingyu",
    "desc": "",
    "col": "3",
    "category": "secretariat",
    "linkedin": "https://www.linkedin.com/in/yingyu-wang-913275131/",
    "level_desc": "Project Officer, S x LM Initiative"
}, {
    "order": "8",
    "name": "YU Pengnian",
    "desc": "Chairman, The Panglin Hotel Shenzhen",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "7",
    "name": "GUAN Enci",
    "desc": "Board Member and General Manager, Vacations International Travel Service (Macau) Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "6",
    "name": "GU Shaoming",
    "desc": "Chairman, Bauing Group",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "5",
    "name": "MA Jiezhang",
    "desc": "Honorary President, Carrianna Group Holdings Ltd",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "11",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "1",
    "src": "./images/chairman/chenshiyi.jpg",
    "name": "CHEN Shiyi",
    "desc": "President, Southern University of Science and Technology",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "4",
    "level_desc": "Honorary President"
}, {
    "order": "4",
    "src": "./images/chairman/tanglixia.jpg",
    "name": "TANG Lixia",
    "desc": "Former Director General, Foreign Affairs ...",
    "tip": "Former Director General, Foreign Affairs Office of Shenzhen Municipal People's Government",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "Honorary President"
}, {
    "order": "2",
    "src": "./images/chairman/langlang.jpg",
    "name": "LANG Lang",
    "desc": "World-renowned Pianist",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "Honorary President"
}, {
    "order": "3",
    "src": "./images/chairman/maweihua.jpg",
    "name": "MA Weihua",
    "desc": "President , China Entrepreneur Club...",
    "tip": "President , China Entrepreneur Club<br>Former President and CEO, China Merchants Bank",
    "col": "3",
    "category": "organization",
    "level": "chairman",
    "level_span": "0",
    "level_desc": "Honorary President"
}, {
    "order": "9",
    "name": "LIN Zhongcheng",
    "desc": "Founder & Chairman, Yinsheng Technology Services Group Co.,Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "10",
    "name": "ZHONG Baisheng",
    "desc": "Founder and Chairman, Tempus Group",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "11",
    "name": "ZHAO Xinzhu",
    "desc": "Chairman, Zhongyi Group Co., Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "12",
    "name": "LIANG Xiguang",
    "desc": "Chairman, Shenzhen Guowei Electronics Co., Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "13",
    "name": "HUANG Wei",
    "desc": "Chairman, Shenzhen New World Group Co., Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "14",
    "name": "HUANG Hongsheng",
    "desc": "Chairman, Skyworth Group Co.,Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "15",
    "name": "DENG Peng",
    "desc": "Executive Director, UBTECH",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman",
    "level_span": "0",
    "level_desc": "Honorary<br>Vice President"
}, {
    "order": "16",
    "name": "MA Hongming",
    "desc": "Executive Director, Carrianna Group Holdings Co., Ltd",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "5",
    "level_desc": "Honorary<br>Trustee"
}, {
    "order": "17",
    "name": "FANG Mandi",
    "desc": "CEO, Hua Yun International Logistics Limited",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "Honorary<br>Trustee"
}, {
    "order": "18",
    "name": "OU Qiwen",
    "desc": "Managing Director, Shenzhen Marsa Co.,Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "Honorary<br>Trustee"
}, {
    "order": "19",
    "name": "ZHUANG Lukun",
    "desc": "Chairman, Shenzhen Bestva Group Co., Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "Honorary<br>Trustee"
}, {
    "order": "20",
    "name": "WU Rongji",
    "desc": "Permanent Honorary President, Dapeng Chamber of Commerce in Dapeng New District, Shenzhen",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member",
    "level_span": "0",
    "level_desc": "Honorary<br>Trustee"
}, {
    "order": "21",
    "name": "WANG Lan",
    "desc": "Chairman, Shenzhen Catic Wellness Group Co., Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "member",
    "level_span": "2",
    "level_desc": "Honorary<br>Member"
}, {
    "order": "22",
    "name": "LI Youjian",
    "desc": "President, TongXinFeiYang Education Group",
    "desc_span": "1",
    "category": "organization",
    "level": "member",
    "level_span": "0",
    "level_desc": "Honorary<br>Member"
}, {
    "order": "23",
    "name": "Futian District Government ",
    "desc": "各区外办负责",
    "desc_span": "10",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "10",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "24",
    "name": "Luohu District Government",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "25",
    "name": "Yantian District Government",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "26",
    "name": "Nanshan District Government",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "27",
    "name": "Bao’An District Government",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "28",
    "name": "Longgang District Government",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "29",
    "name": "Administrative Committee of Guangming District",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "30",
    "name": "Administrative Committee of Pingshan District",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "31",
    "name": "Administrative Committee of Longhua District",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "32",
    "name": "Administrative Committee of Dapeng New District",
    "desc": "各区外办负责",
    "desc_span": "0",
    "category": "organization",
    "level": "chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>President"
}, {
    "order": "33",
    "name": "Vanke Co,.Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "12",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "34",
    "name": "BYD Co,.Ltd.",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "35",
    "name": "Shenzhen Polytechnic",
    "desc": "校长：刘洪一",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "36",
    "name": "Shenzhen Institute of Information and Technology",
    "desc": "校长：邢锋",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "37",
    "name": "Shenzhen Metro Group Co.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "7",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "38",
    "name": "Shenzhen Capital Co.,Ltd",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "39",
    "name": "Shenzhen Airport Group Co.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "40",
    "name": "Shenzhen Yantian Port Group Co.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "41",
    "name": "Shenzhen Investment Holding Co.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "42",
    "name": "Shenzhen Fortune High Investment Group CO.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "43",
    "name": "Shenzhen Energy Group Co., Ltd.",
    "desc": "国资委对接",
    "desc_span": "0",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "44",
    "name": "Shenzhen Cheerland Group Co.,Ltd.",
    "desc": "国资委对接",
    "desc_span": "1",
    "category": "organization",
    "level": "vice_chairman_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Vice President"
}, {
    "order": "45",
    "name": "Shenzhen University",
    "desc": "校长：阮双琛",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member_unit",
    "level_span": "2",
    "level_desc": "Honorary<br>Institutional<br>Trustee"
}, {
    "order": "46",
    "name": "AEE Technology",
    "desc_span": "1",
    "category": "organization",
    "level": "council_member_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Trustee"
}, {
    "order": "47",
    "name": "China Southern Airlines Co.,Ltd.",
    "desc": "总经理：刘国军",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "4",
    "level_desc": "Honorary<br>Institutional<br>Member"
}, {
    "order": "48",
    "name": "Shenzhen Industrial Design Profession Association",
    "desc": "秘书长：封昌红",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Member"
}, {
    "order": "49",
    "name": "3Nod Digital Group Co., Ltd.",
    "desc": "董事长：刘志雄",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Member"
}, {
    "order": "50",
    "name": "Shenzhen INVT Electric Co.,Ltd.",
    "desc": "董事长：黄申力",
    "desc_span": "1",
    "category": "organization",
    "level": "member_unit",
    "level_span": "0",
    "level_desc": "Honorary<br>Institutional<br>Member"
}]
