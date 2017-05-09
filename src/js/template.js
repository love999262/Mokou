class Template {
    constructor() {
        this.prefix = 'mokou';
        this.template = {};
    }
    _createInstance() {
        this.template.$instance = $(
            `
            <div class="${this.prefix}">
                <div class="${this.prefix}-img"></div>
                <div class="${this.prefix}-search"></div>
            </div>
            `
        );
    }

    getInstance() {
        if(this.template.$instance) {
            return this.template.$instance;
        }
        this._createInstance();
        return this.template.$instance;
    }


    _createSearchBar() {
        this.template.$searchBar = $(
            `
            <div class="${this.prefix}-search-bar">
            </div>    
            `
            );
    }

    getSearchBar() {
        if(this.template.$searchBar) {
            return this.template.$searchBar;
        }
        this._createSearchBar();
        return this.template.$searchBar;
    }
    _createWebsites() {
        this.template.$websites = $(
            `
            <div class="${this.prefix}-search-panel">
            </div>
            `
            );
    }

    getWebsites() {
        if(this.template.$websites) {
            return this.template.$websites;
        }
        this._createWebsites();
        return this.template.$websites;
    }
}
module.exports = Template;
