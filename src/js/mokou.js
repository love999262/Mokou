require('../scss/reset.scss');
require('../scss/mokou.scss');
require('../scss/navigator.scss');
// const ripples = require('./jquery.ripples.js');
const Navigator = require('./navigator.js');
const websites = require('./websites.js');
const searchEngines = require('./searchEngines.js');
// const mCustomScrollbar = require('./jquery.mCustomScrollbar.min.js');
// require('perfect-scrollbar/jquery')($);
// const Aplayer = require('Aplayer');

class Makou {
    constructor() {
        this.prefix = 'mokou-';
        this.qiniu = 'http://omltgvp37.bkt.clouddn.com/';
        this.localPicDir = './images/';
        this.TPL = `
            <div class="mokou">
                <div class="mokou-img"></div>
                <div class="mokou-search">
                </div>
            </div>
        `;
        this.$TPL = $(this.TPL);
        this.setMakou();
        this.setIcon(this.qiniu + 'mokou.ico');
        this.setBackGround(690);
        this.changeBackGround();
        // this.setBackVideo();
        // try {
        //     this.setRipples();
        // } catch(e) {
        //     console.debug(e);
        // }
        let navigator = new Navigator();
        let $search = $('.' + this.prefix + 'search');
        let $_searchEngines = navigator.reseloveSearchEngines(searchEngines.list);
        let $_websites = navigator.resolveWebsites(websites);
        $search.append($_searchEngines);
        $search.append($_websites);
        // $('body').perfectScrollbar();
        // $('body').mCustomScrollbar({
        //     axis: 'y',
        //     scrollInertia: 100,
        //     // theme: 'minimal'
        // });
    }
        
    setMakou() {
        $('body').append(this.$TPL);
    }
    
    setBackGround(totalpic) {
        let _num = Math.round(Math.random() * totalpic);
        $('.' + this.prefix + 'img').css({
            'background-image': 'url(' + this.qiniu + 'bg' + _num.toString() + '.jpg)'
            // 'background-image': 'url(' + this.localPicDir + 'bg' + _num.toString() + '.jpg)'
        });
    }

    setBackVideo(url) {
        let _num = Math.ceil(Math.random() * 2);
        var _video = $('<video class="' + this.prefix + 'video" src="' + this.qiniu + 'bg-video' + _num.toString() + '.mp4" autoplay="autoplay" loop="loop"></video>');
        $('.mokou').append(_video);
    }

    setIcon(url) {
        let $_ico = $('<link rel="shortcut icon" href="' + url + '">');
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

    changeBackGround() {
        $(document).on('keydown', (e) => {
            e = e || event;
            let keyCode = e.keyCode;
            switch (keyCode) {
                case 192:
                    if ($('.' + this.prefix + 'search-bar-input').is(':focus') === false) {
                        this.setBackGround(436);
                    }
                    break;
            }      
        });
    }
}
let makou = new Makou();