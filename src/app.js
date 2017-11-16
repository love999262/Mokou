require('./scss/reset.scss');
require('./scss/mokou.scss');
require('./scss/navigator.scss');
const Navigator = require('./js/navigator.js');
const privateWebsites = require('./js/private-websites.js');
const publicWebsites = require('./js/websites.js');
const searchEngines = require('./js/searchEngines.js');
const Template = require('./js/template.js');
// const ripples = require('./jquery.ripples.js');

class Mokou {
    constructor() {
        this.prefix = 'mokou';
        this.template = new Template();
        this.$TPL = this.template.getInstance();
        this.qiniu = 'http://omltgvp37.bkt.clouddn.com/';
        this.localPicDir = './images/';
        this.totalpicLength = 713;
        this.setMokou();
        this.setIcon(`${this.qiniu}mokou.ico`);
        // this.isLocalPic = true;
        this.setBackGround(this.totalpicLength, this.isLocalPic); // total, islocal
        this.navigator = new Navigator();
        let $search = $(`.${this.prefix}-search`);
        let $_searchEngines = this.navigator.reseloveSearchEngines(searchEngines.list);
        const websites = privateWebsites && (privateWebsites.ACG ? privateWebsites : publicWebsites);
        let $_websites = this.navigator.resolveWebsites(websites);
        $search.append($_searchEngines);
        $search.append($_websites);
        this.addEvents();
    }
    
    addEvents() {
        // global event listener
        this.$TPL.on('click', (e) => {
            console.log(e);
            (e.target.className.toLowerCase() === `${this.prefix}-search-bar-container-panel` && e.target.nodeName.toLowerCase() === 'button') || $(`.${this.prefix}-search-bar-container-dropmenu`).hide();
            (e.target.className.toLowerCase() === `${this.prefix}-search-bar-search-history`) || (e.target.className.toLowerCase() === `${this.prefix}-search-bar-search-history-list`) || (e.target.className.toLowerCase() === `${this.prefix}-search-bar-input`) || this.navigator.hideSearchHistoryPanel();
            if($(e.target).hasClass(`${this.prefix}-search-bar-btn`)) {
                this.navigator.ifSearch($(`.${this.prefix}-search-bar-input`).val());
            }
            if($(e.target).hasClass(`${this.prefix}-search-bar-container-btn`)) {
                window.open(this.navigator.searchBtnHref);
            }
            if($(e.target).hasClass(`${this.prefix}-search-bar-container-panel`)) {
                $(`.${this.prefix}-search-bar-container-dropmenu`).toggle();
            }
            if($(e.target).hasClass(`${this.prefix}-search-bar-search-history-list`)) {
                // console.log(e.target);
                this.navigator.ifSearch($(e.target).text());
            }
        });
        $(document).on('keydown', (e) => {
            e = e || event;
            let keyCode = e.keyCode;
            console.log(`${e.key}:${e.keyCode}`);
            switch (keyCode) {
                case 13:
                    if ($(`.${this.prefix}-search-bar-input`).is(':focus')) {
                        this.navigator.ifSearch($(`.${this.prefix}-search-bar-input`).val());
                    }
                    this.setFoucs();
                    break;
                case 192:
                    if ($(`.${this.prefix}-search-bar-input`).is(':focus') === false) {
                        this.setBackGround(this.totalpicLength, this.isLocalPic);
                    }
                    break;
                default:
                    this.setFoucs();
            }
        });
        $(`.${this.prefix}-search-bar-input`).on('focus', (e) => {
            e = e || event;
            this.navigator.getSearchHistoryPanel();
        });
        // $(`.${this.prefix}-search-bar-input`).on('blur', (e) => {
        //     e = e || event;
        //     // this.navigator.hideSearchHistoryPanel();
        // });
    }

    setFoucs() {
        $(`.${this.prefix}-search-bar-input`).focus();
    }

    setMokou() {
        $('body').append(this.$TPL);
    }
    
    setBackGround(totalpic, isLocal) {
        let _num = Math.round(Math.random() * totalpic);
        if(isLocal) {
            $(`.${this.prefix}-img`).css({
                'background-image': `url(${this.localPicDir}bg${_num.toString()}.jpg)`
            });
        } else {
            $(`.${this.prefix}-img`).css({
                'background-image': `url(${this.qiniu}bg${_num.toString()}.jpg)`
            });
        }

    }

    setBackVideo(url) {
        let _num = Math.ceil(Math.random() * 2);
        var _video = $(`<video class="${this.prefix}-video" src="${this.qiniu}bg-video${_num.toString()}.mp4" autoplay="autoplay" loop="loop"></video>`);
        $('.mokou').append(_video);
    }

    setIcon(url) {
        let $_ico = $(`<link rel="shortcut icon" href="${url}">`);
        $('head').append($_ico);
    }

    setRipples() {
        let $_wrap = $('<div class="wrapper"></div>');
        $_wrap.css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0
        });
        $('.mokou').append($_wrap);
        $_wrap.ripples({
            resolution: 512,
            dropRadius: 10, //px
            perturbance: 0.01
        });
    }
}
let mokou = new Mokou();