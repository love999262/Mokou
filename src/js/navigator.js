const Template = require('./template.js');

class Navigator {
    constructor() {
        this.prefix = 'mokou';
        this.searchInterface = 'https://www.baidu.com/s?wd=';
        this.searchBtnHref = 'https://www.baidu.com/';
        this.template = new Template();
        this._template = {};
        this.$searchBar = this.template.getSearchBar();
        this.$websites = this.template.getWebsites();
    }
    reseloveSearchEngines(searchEngines) {
        this._template.$_defbtn = $('<button class="mokou-search-bar-container-btn">' + searchEngines[1].name + '</button>');
        this._template.$_dropmenu = $('<ul class="mokou-search-bar-container-dropmenu" style="display:none;"></ul>');
        for (let i = 0; i < searchEngines.length; i++) {
            let $_list = $('<li class="mokou-search-bar-container-dropmenu-searchengine">' + searchEngines[i].name + '</li>');
            $_list.on('click', () => {
                this._template.$_defbtn.html(searchEngines[i].name);
                this.searchInterface = searchEngines[i].url;
                this.searchBtnHref = searchEngines[i].href;
                this._template.$_dropmenu.toggle();
            });
            this._template.$_dropmenu.append($_list);
        }
        this._template.$_choice = $('<button class="mokou-search-bar-container-panel"></button>');
        this._template.$_inputbox = $('<input type="text" class="mokou-search-bar-input" placeholder="Open The Door To A Whole New World!!!">');
        this._template.$_searchBtn = $('<btn class="mokou-search-bar-btn" style="background-color:' + this.getRandomColor() + '"></btn>');
        this.$searchBar.append(this._template.$_defbtn);
        this.$searchBar.append(this._template.$_dropmenu);
        this.$searchBar.append(this._template.$_choice);
        this.$searchBar.append(this._template.$_inputbox);
        this.$searchBar.append(this._template.$_searchBtn);
        return this.$searchBar;
    }

    resolveWebsites(websites) {
        for (let i in websites) {
            this._template.$_nav = $('<ul class="mokou-search-panel-nav"></ul>');
            this._template.$_title = $('<li class="mokou-search-panel-nav-list-title" style="background-color:' + this.getRandomColor() + '">' + i + '</li>');
            this._template.$_nav.append(this._template.$_title);
            for (let j in websites[i]) {
                let $_list = $('<li class="mokou-search-panel-nav-list">' + j + '</li>');
                $_list.on('click', () => {
                    window.open(websites[i][j]);
                });
                this._template.$_nav.append($_list);
            }
            this.$websites.append(this._template.$_nav);
        }
        return this.$websites;
    }

    ifSearch(val) {
        let _val = val.replace('%', '%25');
        let _decodeVal = decodeURIComponent(_val);
        console.log(this.searchInterface + _decodeVal);
        window.open(this.searchInterface + _decodeVal);
    }

    getRandomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        if (r < 16) {
            r = '0' + r.toString(16);
        } else {
            r = r.toString(16);
        }
        if (g < 16) {
            g = '0' + g.toString(16);
        } else {
            g = g.toString(16);
        }
        if (b < 16) {
            b = '0' + b.toString(16);
        } else {
            b = b.toString(16);
        }

        return '#' + r + g + b;
    }
}
module.exports = Navigator;
