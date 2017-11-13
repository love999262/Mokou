# [online](https://love999262.github.io/mokou/publish/mokou.html)

# code refactoring

Due to the old project [moe](https://github.com/love999262/moe) use to much unnecessary library and the code is too comolex to rewrite,I make a decision that to open a new project to rewrite it to make up for it.

# build

```
$ npm install
```

- npm run dev

[webpack-dev-server](http://localhost:8080/webpack-dev-server/index.html)
[index](http://localhost:8080/index.html)


- change the website & searchEngines

change the file in src/js/searchEngines.js & websites.js


```
// searchEngines.js
let searchEngines = {
    list: [{ 'name': 'google', 'url': 'https://www.google.com.hk/webhp?tab=Tw#newwindow=1&safe=strict&q=', 'href': 'https://www.google.com.hk/webhp?hl=zh-CN' },
        { 'name': 'baidu', 'url': 'https://www.baidu.com/s?wd=', 'href': 'https://www.baidu.com/' }, {
            'name': 'MDN',
            'url': 'https://developer.mozilla.org/zh-CN/search?q=',
            'href': 'https://developer.mozilla.org/zh-CN/'
        },
        { 'name': 'npmjs', 'url': 'https://www.npmjs.com/package/', 'href': 'https://www.npmjs.com/package/package' },
        { 'name': '谷歌镜像', 'url': 'http://soguge.com/search?hl=zh-CN&q=', 'href': 'http://www.google.com/' },
        { 'name': 'bing', 'url': 'http://global.bing.com/search?q=', 'href': 'http://global.bing.com/' },
        { 'name': '必应', 'url': 'http://cn.bing.com/search?q=', 'href': 'http://cn.bing.com/' },
        { 'name': 'yahoo!', 'url': 'https://sg.search.yahoo.com/search?p=', 'href': 'https://search.yahoo.com/' },
        { 'name': '网易云音乐', 'url': 'http://music.163.com/#/search/m/?s=', 'href': 'http://music.163.com/#' }, {
            'name': '维基百科',
            'url': 'https://zh.wikipedia.org/w/index.php?search=',
            'href': 'https://zh.wikipedia.org/wiki/Wikipedia:首页'
        },
        { 'name': 'wikipedia', 'url': 'https://en.wikipedia.org/wiki/', 'href': 'https://www.wikipedia.org/' },
        { 'name': '谷歌翻译', 'url': 'http://translate.google.cn/#en/zh-CN/', 'href': 'https://translate.google.cn/' }, {
            'name': '谷歌搜图',
            'url': 'https://www.google.com.hk/search?newwindow=1&safe=strict&hl=zh-CN&site=webhp&tbm=isch&sa=1&q=',
            'href': 'https://www.google.com/'
        }, {
            'name': '百度搜图',
            'url': 'http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=',
            'href': 'https://www.baidu.com/'
        },
        { 'name': 'torrentkitty', 'url': 'https://www.torrentkitty.tv/search/', 'href': 'https://www.torrentkitty.tv/' },
        { 'name': '虾米音乐', 'url': 'http://www.xiami.com/search?key=', 'href': 'http://www.xiami.com/' },
        { 'name': '高德地图', 'url': 'http://ditu.amap.com/search?query=', 'href': 'http://ditu.amap.com/' }, {
            'name': '百度云',
            'url': 'http://baiduyun.57fx.cn/so-result.html?keyword=',
            'href': 'https://pan.baidu.com/disk/home#list/path=%2F'
        }
    ]
};

module.exports = searchEngines;
```

```
websites.js

let websites = {
    ACG: {
        bilibili: 'http://www.bilibili.com',
        acfun: 'http://www.acfun.tv/',
        Tbus: 'http://games.tgbus.com/pspcn/',
        thwiki: 'http://www.thwiki.cc/',
        hacg: 'https://www.hacg.li/'
    },
    sns: {
        weibo: 'http://weibo.com/',
        zhihu: 'https://www.zhihu.com/',
        douban: 'https://www.douban.com/',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    techonology: {
        github: 'https://github.com/love999262',
        mail: 'https://exmail.qq.com/',
        stackoverflow: 'http://stackoverflow.com/',
        w3schools: 'http://www.w3schools.com/',
        '$.api': 'http://api.jquery.com/',
        caniuse: 'http://caniuse.com/'
    },
    shopping: {
        taobao: 'https://www.taobao.com/',
        JD: 'http://www.jd.com/',
        Amazon: 'http://www.amazon.cn/',
        smzdm: 'http://www.smzdm.com/',
        AmazonJP: 'https://www.amazon.co.jp/',
    },
    others: {
        alexa: 'http://www.alexa.com/',
        jshint: 'http://jshint.com/',
        jsfiddle: 'https://jsfiddle.net/',
        babel: 'http://babeljs.io/'
    }
};

module.exports = websites;
```
