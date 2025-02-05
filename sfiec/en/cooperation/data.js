/*每个城市添加城市编号，用来区分唯一性*/

var cooperators = [{
    "title": "柬埔寨民间社会组织联盟论坛",
    "content": "Civil   Society Alliance Forum",
    "year": "2018",
    "location": "Phnom Penh,Cambodia",
    "code":"c001",
    "logo": "./images/CSAF.png",
    'transform': true,
}, {
    "title": "天安数码城",
    "content": "Tianan Cyber Park",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Tianan.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "海牙商务局",
    "content": "The Hague Business Agency",
    "year": "2018",
    "location": "The Hague,the Netherlands",
    "code":"c003",
    "logo": "./images/TheHague.png",
    "top": "37",
    "left": "49"
}, {
    "title": "科控欧洲科技创新中心-伦敦",
    "content": "Cocoon   Networks London",
    "year": "2018",
    "location": "London,UK",
    "code":"c004",
    "logo": "./images/Cocoon.png",
    'transform': true,
    "top": "37",
    "left": "47"
}, {
    "title": "加中国际创新中心-多伦多",
    "content": "Sino-Canada   Innovation Centre Toronto",
    "year": "2018",
    "location": "Toronto,Canada",
    "code":"c005",
    "logo": "./images/CanadaToronto.png",
    'transform': true,
    "top": "38",
    "left": "37"
},
    {
    "title": "华大基因全球创新中心-西雅图 &圣何塞",
    "content": "BGI   Global Innovation Center at Seattle and San Jose of USA",
    "year": "2018",
    "location": "Seattle,USA",
    "code":"c006",
    "logo": "./images/BGI.png",
    'transform': true,
    "top": "44",
    "left": "29"
}, {
    "title": "华大基因全球创新中心-西雅图 &圣何塞",
    "content": "BGI   Global Innovation Center at Seattle and San Jose of USA",
    "year": "2018",
    "location": "San Jose,USA",
    "code":"c007",
    "logo": "./images/BGI.png",
    'transform': true,
    "top": "41",
    "left": "29.5"
}, {
    "title": "深圳源泉汇国际创新中心",
    "content": "Yuanquan   Innovation Center",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Yuanquan.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "源创力波士顿创新中心",
    "content": "CRI   Boston Innovation Center",
    "year": "2018",
    "location": "Boston,USA",
    "code":"c008",
    "logo": "./images/CRIBoston.png",
    'transform': true,
    "top": "40",
    "left": "35"
}, {
    "title": "瑞中企业家协会",
    "content": "Sweden-China Entrepreneur Association",
    "year": "2018",
    "location": "Stockholm,Sweden",
    "code":"c009",
    "logo": "./images/Sweden.png",
    'transform': true,
    "top": "31",
    "left": "51"
}, {
    "title": "清华大学深圳研究院 ",
    "content": "Research Institute of Tsinghua University in Shenzhen",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Tsinghua.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳市走出去战略合作联盟",
    "content": "Shenzhen   Outbound Alliance",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Outbound.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳市创新企业社会责任促进中心",
    "content": "Shenzhen   Innovation Corporate Social Responsibility Development Center",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/ShenzhenCSR.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳经济特区社会工作学院",
    "content": "Shenzhen   Star Social Work College",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/ShenzhenSocialWork.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳市慈善会",
    "content": "Shenzhen   Charity Federation",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/ShenzhenCharity.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳市一个地球自然基金会",
    "content": "One   Planet Foundation",
    "year": "2018",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/OnePlanet.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "世界自然基金会（续签）",
    "content": "World Wildlife Fund",
    "year": "2018",
    "location": "Gland,Switzerland",
    "code":"c010",
    "logo": "./images/WWF.png",
    'transform': true,
    "top": "40",
    "left": "49.5"
}, {
    "title": "平安科技(深圳)有限公司",
    "content": "Ping   An Technology (Shenzhen) Co., Ltd.",
    "year": "2017",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/PingAn.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "余彭年慈善基金会",
    "content": "Yupengnian   Charity Foundation",
    "year": "2017",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Yupengnian.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "华大基因健康科技（香港）有限公司",
    "content": "BGI   Health (HK) Co., Ltd.",
    "year": "2017",
    "location": "Hong Kong,China",
    "code":"c011",
    "logo": "./images/BGI.png",
    'transform': true,
    "top": "54",
    "left": "65"
}, {
    "title": "深圳市华亚区域经济发展服务中心",
    "content": "Shenzhen   Huaya Regional Economic Development Service Center",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/HUaya.png",
    'transform': true,
    "year": "2017",
    "top": "52",
    "left": "65.5"
}, {
    "title": "马来西亚一带一路总商会",
    "content": "Malaysian   Chamber of Commerce of “Belt and Road”",
    "year": "2017",
    "location": "Kuala Lumpur,Malaysia",
    "code":"c012",
    "logo": "./images/Malaysia.png",
    'transform': true,
    "top": "62",
    "left": "64"
}, {
    "title": "香港善德基金会",
    "content": "Shine   Tak Foundation",
    "year": "2017",
    "location": "Hong Kong,China",
    "code":"c011",
    "logo": "./images/ShineTak.png",
    'transform': true,
    "top": "54",
    "left": "65"
}, {
    "title": "华盛顿州中国关系委员会（续签）",
    "content": "Washington   State China Relations Council",
    "year": "2017",
    "location": "Seattle,USA",
    "code":"c006",
    "logo": "./images/WashingtonState.png",
    "top": "44",
    "left": "29"
}, {
    "title": "巴塞罗那大学",
    "content": "Universitat   de Barcelona",
    "year": "2017",
    "location": "Barcelona,Spain",
    "code":"c013",
    "logo": "./images/Barcelona.png",
    "top": "44",
    "left": "48"
}, {
    "title": "一带一路国际合作发展（深圳）研究院",
    "content": "The   Belt and Road Research Institute (Shenzhen) for International Cooperation and   Development",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/BeltnRoad.png",
    'transform': true,
    "year": "2017",
    "top": "52",
    "left": "65.5"
}, {
    "title": "深圳国际科技商务平台",
    "content": "Shenzhen   International Science and Technology Business Platform",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/STB.png",
    'transform': true,
    "year": "2017",
    "top": "52",
    "left": "65.5"
}, {
    "title": "迪拜杰贝阿里自贸区",
    "content": "Jebel   Ali Free Zone",
    "year": "2016",
    "location": "Dubai,UAE",
    "code":"c014",
    "logo": "./images/JAFZA.png",
    "top": "52",
    "left": "56.5"
}, {
    "title": "加拿大深圳社团联合总会",
    "content": "Canada   Confederation of Shenzhen Associations",
    "year": "2016",
    "location": "Toronto,Canada",
    "code":"c005",
    "logo": "./images/CanadaConfederation.png",
    "top": "30",
    "left": "25"
}, {
    "title": "泰中文化经济协会",
    "content": "Thai-Chinese   Cultural and Economy Association",
    "year": "2016",
    "location": "Bangkok,Thailand",
    "code":"c015",
    "logo": "./images/Thai.png",
    "top": "55",
    "left": "63.5"
}, {
    "title": "迪拜未来博物馆基金会",
    "content": "Museum   of the Future foundation",
    "year": "2016",
    "location": "Dubai,UAE",
    "code":"c014",
    "logo": "./images/FutureFoundation.png",
    "top": "52",
    "left": "56.5"
}, {
    "title": "韩国高潜能企业家协会",
    "content": "Association   of High Potential Enterprise of Korea",
    "location": "South Korea",
    "code":"c016",
    "logo": "./images/KoreaVenture.png",
    "year": "2016",
    "top": "45",
    "left": "68"
}, {
    "title": "韩国风险协会",
    "content": "Korea   Venture Business Association",
    "year": "2016",
    "location": "South Korea",
    "code":"c016",
    "logo": "./images/EnterpriseKorea.png",
    "top": "45",
    "left": "68"
}, {
    "title": "布里斯班城市推广署",
    "content": "City   Promotion of Brisbane",
    "year": "2015",
    "location": "Brisbane,Australia",
    "code":"c017",
    "logo": "./images/Brisbane.png",
    "top": "73",
    "left": "72"
}, {
    "title": "深圳市大鹏新区珊瑚保育志愿联合会",
    "content": "Shenzhen   Dapeng Coral Conservation Volunteers Federation",
    "year": "2015",
    "location": "Shenzhen,China",
    "code":"c002",
    "logo": "./images/Dive4Love.png",
    'transform': true,
    "top": "52",
    "left": "65.5"
}, {
    "title": "华盛顿州中国关系委员会",
    "content": "Washington   State China Relations Council",
    "year": "2015",
    "location": "Seattle,USA",
    "code":"c006",
    "logo": "./images/WashingtonState.png",
    "top": "44",
    "left": "29"
}, {
    "title": "世界自然基金会",
    "content": "World Wildlife Fund",
    "year": "2015",
    "location": "Gland,Switzerland",
    "code":"c010",
    "logo": "./images/WWF.png",
    "top": "33",
    "left": "33"
}]
