require('../scss/reset.scss');
require('../scss/mokou.scss');
require('../scss/navigator.scss');
let ripples = require('./jquery.ripples.js');
let Navigator = require('./navigator.js');
let websites = require('./websites.js');
let searchEngines = require('./searchEngines.js');

class Makou {
    constructor() {
        this.prefix = 'mokou-';
        this.picDir = 'http://omltgvp37.bkt.clouddn.com/';
        this.TPL = `
            <div class="mokou">
                <div class="mokou-img"></div>
                <div class="mokou-search">
                </div>
            </div>
        `;
        this.$TPL = $(this.TPL);
        this.setMakou();
        this.setIcon(this.picDir + 'icon.ico');
        this.setBackGround(436);
        this.changeBackGround();
        try {
            this.setRipples($('.mokou'));
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
        });
    }

    setIcon(url) {
        let $_ico = $('<link rel="shortcut icon" href="' + url + '">');
        $('head').append($_ico);
    }

    setRipples($dom) {
        $dom.ripples({
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