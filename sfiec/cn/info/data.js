/*
里面所有的符号格式必须是英文格式的
数据格式说明：
[]:表示列表，是所有元素的集合
{}:表示字典，里面就是每个元素的所有信息，{}如果在中间位置，后面需要加英文逗号: ,
网络路径：网址，
本地路径：保存在和文件同一台电脑设备的路径，
如：./images/brisbane Cropped.jpeg"，./：文件的相同目录，images：一个叫images的文件夹，brisbane Cropped.jpeg：图片名称
其他：../：表示文件的上一级目录
{
    "title": "标题",
    "category": "分类",
    "desc": "分类描述",
    "link": "文件路径",
    "order": 同一个类型中的显示排序
}
 */

var data = [{
    "title": "深圳市国际交流合作基金会项目管理制度",
    "category": "management",
    "desc": "管理制度",
    "link": "./reports/management-1.pdf",
    "order": 2
}, {
    "category": "management",
    "desc": "管理制度",
    "order": 1,
    "link": "./reports/management-2.pdf",
    "title": "深圳市国际交流合作基金会财务管理制度"
}, {
    "title": "深圳市国际交流合作基金会人力资源管理制度",
    "category": "management",
    "desc": "管理制度",
    "link": "./reports/management-3.pdf",
    "order": 3
}, {
    "category": "auditReport",
    "desc": "审计报告",
    "order": 5,
    "link": "./reports/auditReport-leave.pdf",
    "title": "深圳市国际交流合作基金会离任审计报告（2014年12月-2017年7月）"
}, {
    "title": "深圳市国际交流合作基金会2017年审计报告",
    "category": "auditReport",
    "desc": "审计报告",
    "link": "./reports/auditReport-2017.pdf",
    "order": 4
}, {
    "category": "auditReport",
    "desc": "审计报告",
    "order": 2,
    "link": "./reports/auditReport-2015.pdf",
    "title": "深圳市国际交流合作基金会2015年审计报告"
}, {
    "category": "auditReport",
    "desc": "审计报告",
    "order": 3,
    "link": "./reports/auditReport-2016.pdf",
    "title": "深圳市国际交流合作基金会2016年审计报告"
}, {
    "title": "深圳市国际交流合作基金会2014年审计报告",
    "category": "auditReport",
    "desc": "审计报告",
    "link": "./reports/auditReport-2014.pdf",
    "order": 1
}, {
    "title": "深圳市国际交流合作基金会2014年度年检工作报告",
    "category": "annualReport",
    "desc": "年检报告",
    "link": "./reports/annualReport-2014.pdf",
    "order": 1
}, {
    "category": "annualReport",
    "desc": "年检报告",
    "order": 4,
    "title": "深圳市国际交流合作基金会2017年度年检工作报告",
    "link": "./reports/annualReport-2017.pdf",
}, {
    "category": "annualReport",
    "desc": "年检报告",
    "order": 3,
    "link": "./reports/annualReport-2016.pdf",
    "title": "深圳市国际交流合作基金会2016年度年检工作报告"
}, {
    "title": "深圳市国际交流合作基金会2015年度年检工作报告",
    "category": "annualReport",
    "desc": "年检报告",
    "order": 2,
    "link": "./reports/annualReport-2015.pdf",
}]
