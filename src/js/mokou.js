require('../scss/reset.scss');
require('../scss/mokou.scss');
require('../scss/navigator.scss');
const ripples = require('./jquery.ripples.js');
const Navigator = require('./navigator.js');
const websites = require('./websites.js');
const searchEngines = require('./searchEngines.js');
// const Aplayer = require('Aplayer');

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
        // let ap = new APlayer({
        //     element: document.getElementById('player1'),                       // Optional, player element
        //     narrow: false,                                                     // Optional, narrow style
        //     autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
        //     showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
        //     mutex: true,                                                       // Optional, pause other players when this player playing
        //     theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
        //     mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
        //     preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
        //     listmaxheight: '513px',                                             // Optional, max height of play list
        //     music: {                                                           // Required, music info, see: ###With playlist
        //         title: 'Preparation',                                          // Required, music title
        //         author: 'Hans Zimmer/Richard Harvey',                          // Required, music author
        //         url: 'http://7xifn9.com1.z0.glb.clouddn.com/Preparation.mp3',  // Required, music url
        //         pic: 'http://7xifn9.com1.z0.glb.clouddn.com/Preparation.jpg',  // Optional, music picture
        //         lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'                   // Optional, lrc, see: ###With lrc
        //     }
        // });
        $search.append($_searchEngines);
        $search.append($_websites);
        // this.createPlayer();
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
    // createPlayer() {
    //     let $player = '<div class="aplayer"></div>';
    //     $('.mokou').append($player);
    //     let aplayer = new Aplayer({
    //         element: document.querySelectorAll('.aplayer')[0],                       // Optional, player element
    //         narrow: false,                                                     // Optional, narrow style
    //         autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    //         showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    //         mutex: true,                                                       // Optional, pause other players when this player playing
    //         theme: '#e6d0b2',                                                  // Optional, theme color, default: #b7daff
    //         mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    //         preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    //         listmaxheight: '513px',                                             // Optional, max height of play list
    //         music: {                                                           // Required, music info, see: ###With playlist
    //             title: 'tomorrow',                                          // Required, music title
    //             // author: 'Hans Zimmer/Richard Harvey',                          // Required, music author
    //             url: './music/tomorrow.mp3',  // Required, music url
    //             // pic: 'http://7xifn9.com1.z0.glb.clouddn.com/Preparation.jpg',  // Optional, music picture
    //             // lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'                   // Optional, lrc, see: ###With lrc
    //         }
    //     });
    // }
}
let makou = new Makou();