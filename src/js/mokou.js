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
        this.picDir = 'http://omltgvp37.bkt.clouddn.com/bg';
        this.TPL = `
            <div class="mokou">
                <div class="mokou-img"></div>
                <div class="mokou-search">
                </div>
            </div>
        `;
        this.$TPL = $(this.TPL);
        this.setMakou();
        this.setBackGround(436);
        this.changeBackGround();
        this.setRipples();
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
        var _num = Math.round(Math.random() * totalpic);
        $('.' + this.prefix + 'img').css({
            'background-image': 'url(' + this.picDir + _num.toString() + '.jpg)'
        });
    }
    setRipples() {
        $('.mokou').ripples({
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
var makou = new Makou();