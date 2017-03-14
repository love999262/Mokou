require('../scss/reset.scss');
require('../scss/mokou.scss');
require('../scss/navigator.scss');
const ripples = require('./jquery.ripples.js');
const Navigator = require('./navigator.js');
const websites = require('./websites.js');
const searchEngines = require('./searchEngines.js');

class Makou {
    constructor() {
        this.prefix = 'mokou-';
        this.picDir = 'http://omltgvp37.bkt.clouddn.com/';
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
        this.setIcon(this.picDir + 'mokou.ico');
        this.setBackGround(577);
        this.changeBackGround();
        try {
            this.setRipples();
        } catch(e) {
            console.debug(e);
        }
        let navigator = new Navigator();
        let $search = $('.' + this.prefix + 'search');
        let $_searchEngines = navigator.reseloveSearchEngines(searchEngines.list);
        let $_websites = navigator.resolveWebsites(websites);
        $search.append($_searchEngines);
        $search.append($_websites);
    }
        
    setMakou() {
        $('body').append(this.$TPL);
    }
    setBackGround(totalpic) {
        let _num = Math.round(Math.random() * totalpic);
        $('.' + this.prefix + 'img').css({
            'background-image': 'url(' + this.picDir + 'bg' + _num.toString() + '.jpg)'
            // 'background-image': 'url(' + this.localPicDir + 'bg' + _num.toString() + '.jpg)'
        });
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