const Template = require('./template.js');

class Navigator {
    constructor() {
        this.prefix = 'mokou-search';
        this.searchInterface = 'https://www.baidu.com/s?wd=';
        this.searchBtnHref = 'https://www.baidu.com/';
        this.searchBtnName = 'baidu';
        this.template = new Template();
        this._template = {};
        this.$searchBar = this.template.getSearchBar();
        this.$websites = this.template.getWebsites();
        this.curDate = new Date().toLocaleString();
        this.searchArray = [];
    }
    reseloveSearchEngines(searchEngines) {
        this._template.$_defbtn = $(`<button class="${this.prefix}-bar-container-btn">${this.searchBtnName}</button>`);
        this._template.$_dropmenu = $(`<ul class="${this.prefix}-bar-container-dropmenu" style="display:none;"></ul>`);
        for (let i = 0; i < searchEngines.length; i++) {
            let $_list = $(`<li class="${this.prefix}-bar-container-dropmenu-searchengine">${searchEngines[i].name}</li>`);
            $_list.on('click', () => {
                this._template.$_defbtn.html(searchEngines[i].name);
                this.searchInterface = searchEngines[i].url;
                this.searchBtnHref = searchEngines[i].href;
                this._template.$_dropmenu.toggle();
            });
            this._template.$_dropmenu.append($_list);
        }
        this._template.$_choice = $(`<button class="${this.prefix}-bar-container-panel"></button>`);
        this._template.$_inputbox = $(`<div><input type="text" class="${this.prefix}-bar-input" placeholder="Open The Door To A Whole New World!!!"></div>`);
        this._template.$_searchBtn = $(`<btn class="${this.prefix}-bar-btn" style="background-color:${this.getRandomColor()}"></btn>`);
        this._template.$searchHistory = $(`<ul class="${this.prefix}-bar-search-history"></ul>`);
        this.$searchBar.append(this._template.$_defbtn);
        this.$searchBar.append(this._template.$_dropmenu);
        this.$searchBar.append(this._template.$_choice);
        this.$searchBar.append(this._template.$_inputbox);
        this.$searchBar.append(this._template.$_searchBtn);
        this._template.$_inputbox.append(this._template.$searchHistory);
        return this.$searchBar;
    }

    resolveWebsites(websites) {
        for (let i in websites) {
            this._template.$_nav = $(`<ul class="${this.prefix}-panel-nav"></ul>`);
            this._template.$_title = $(`<li class="${this.prefix}-panel-nav-list-title" style="background-color:${this.getRandomColor()}">${i}</li>`);
            this._template.$_nav.append(this._template.$_title);
            for (let j in websites[i]) {
                let $_list = $(`<li class="${this.prefix}-panel-nav-list">${j}</li>`);
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
        for(let i = 0; i < this.searchArray.length; i++) {
            if(_val === this.searchArray[i]) {
                return false;
            }
        }
        this.searchArray.push(_val);
        localStorage.setItem(`${this.curDate}history`, JSON.stringify(this.searchArray));
        this.getSearchHistoryPanel();
    }

    getSearchHistoryPanel() {
        if(this.searchArray.length > 0) {
            this._template.$searchHistory.show();
            console.log(this.searchArray);
            let _searchList = '';
            for(let i = 0; i < this.searchArray.length; i++) {
                _searchList += `<li class="${this.prefix}-bar-search-history-list" title="${this.searchArray[i]}">${this.searchArray[i]}</li>`;
            }
            this._template.$searchHistory.html(_searchList);
        }
    }
    hideSearchHistoryPanel() {
        this._template.$searchHistory.hide();
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
