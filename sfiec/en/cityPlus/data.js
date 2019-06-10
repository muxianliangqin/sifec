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
    "logo": "logo图片的路径，可以是网络路径，也可以是本地路径",
    "name": "名称",
    "link": "链接网址",
    "line": "是否在线",
    "top": "相对于页面(这里指的是子页面的)从上看的百分比位置",
    "left": "相对于页面(这里指的是子页面的)从左看的百分比位置",
    "img": "显示图片的路径"
}
 */

var cities = [{
    "logo": "https://static.wixstatic.com/media/17330d_834f5c8ade014851af3d77efefd6ad0e~mv2.png",
    "name": "澳大利亚·布里斯班",
    "link": "http://cityplus.com/5/brisbane/",
    "line": "online",
    "top": "71",
    "left": "74.5",
    "img": "./images/brisbane Cropped.jpeg"
}, {
    "logo": "https://static.wixstatic.com/media/17330d_27842e9e74c74bb197e9ad0d5d6bca58~mv2.png/v1/fill/w_35,h_35,al_c,q_80,usm_0.66_1.00_0.01/japan.webp",
    "name": "日本·筑波",
    "link": "http://cityplus.com/3/tsukuba/",
    "line": "online",
    "top": "35",
    "left": "71.5",
    "img": "./images/tsukuba-min.jpg"
}, {
    "logo": "https://static.wixstatic.com/media/17330d_4db2e342160e44988543282408eab99c~mv2.png",
    "name": "中国·深圳",
    "link": "http://cityplus.com/1/shenzhen/",
    "line": "online",
    "top": "42.5",
    "left": "66",
    "img": "./images/shenzhen-min.jpg"
}, {
    "logo": "https://static.wixstatic.com/media/17330d_4b6633e0e399472cbd01d5da757712bc~mv2.png",
    "name": "阿联酋·沙迦",
    "link": "http://cityplus.com/7/sharjah/",
    "line": "online",
    "top": "41.5",
    "left": "54.5",
    "img": "./images/sharjah-min.jpg"
}, {
    "name": "保加利亚·普罗夫迪夫",
    "logo": "https://static.wixstatic.com/media/17330d_9e15c33a258f474a94e3c5812ab7e455~mv2.png",
    "line": "online",
    "link": "http://cityplus.com/6/plovdiv/",
    "top": "29",
    "left": "49",
    "locate": "top",
    "img": "./images/plovdiv-min.jpg"
}, {
    "logo": "https://static.wixstatic.com/media/17330d_388d8654dd09486a8e06f6e0fdb67812~mv2.png",
    "name": "​荷兰·海牙",
    "line": "online",
    "link": "http://cityplus.com/10/the%20hague/",
    "top": "24",
    "left": "44.5",
    "locate": "top",
    "img": "./images/hague Cropped.jpeg"
}, {
    "name": "​南非·开普敦",
    "logo": "https://static.wixstatic.com/media/17330d_5684275f1cbe4ce885405d3fa3d3404e~mv2.png",
    "link": "http://cityplus.com/4/cape%20town/",
    "line": "online",
    "top": "72.5",
    "left": "48",
    "img": "./images/cape Cropped.jpeg"
}, {
    "name": "​比利时·列日",
    "logo": "https://static.wixstatic.com/media/17330d_5684275f1cbe4ce885405d3fa3d3404e~mv2.png",
    "link": "http://cityplus.com/9/liege/",
    "line": "online",
    "top": "34",
    "left": "44",
    "rotate180":true,
    "img": "./images/liege Cropped.jpeg"
}, {
    "logo": "https://static.wixstatic.com/media/17330d_26372a1c5b1d48a3b9701e95acc0be51~mv2.png",
    "name": "加拿大·多伦多",
    "link": "",
    "line": "offline",
    "top": "35",
    "left": "30",
    "img": ""
}, {
    "logo": "https://static.wixstatic.com/media/17330d_5684275f1cbe4ce885405d3fa3d3404e~mv2.png",
    "name": "美国·西雅图",
    "link": "http://cityplus.com/2/seattle/",
    "line": "online",
    "top": "33",
    "left": "19",
    "img": "./images/seattle-min.jpg"
}]
