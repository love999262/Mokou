class Navigator {
    constructor() {
        this.prefix = 'mokou-';
        this.searchInterface = 'https://www.baidu.com/s?wd=';
    }

    reseloveSearchEngines(searchEngines) {
        let _TPL = `
            <div class="mokou-search-bar">

            </div>       
        `;
        // var _commonColor = this.getRandomColor();
        let $_TPL = $(_TPL);
        let $_defbtn = $('<button class="mokou-search-bar-container-btn">' + searchEngines[1].name + '</button>');
        $_defbtn.on('click', () => {
            window.open(searchEngines[1].href);
        });
        let $_dropmenu = $('<ul class="mokou-search-bar-container-dropmenu" style="display:none;"></ul>');
        for (let i = 0; i < searchEngines.length; i++) {
            let $_list = $('<li class="mokou-search-bar-container-dropmenu-searchengine">' + searchEngines[i].name + '</li>');
            $_list.on('click', () => {
                $_defbtn.html(searchEngines[i].name);
                this.searchInterface = searchEngines[i].url;
                $_dropmenu.toggle();
            });
            $_dropmenu.append($_list);
        }
        let $_choice = $('<button class="mokou-search-bar-container-panel"></button>');
        $_choice.on('click', () => {
            $_dropmenu.toggle();
        });
        // $(document).on('click', (e) => {
        //     e = e || event;
        //     if($_dropmenu.is(':visible')) {
        //         $_dropmenu.hide();
        //     }
        // });
        let $_inputbox = $('<input type="text" class="mokou-search-bar-input" placeholder="Open The Door To A Whole New World!!!">');
        this.listenerKeyboard($_inputbox);
        let $_searchBtn = $('<btn class="mokou-search-bar-btn" style="background-color:' + this.getRandomColor() + '"></btn>');
        $_searchBtn.on('click', () => {
            this.ifSearch($_inputbox.val());
        });
        $_TPL.append($_defbtn);
        $_TPL.append($_dropmenu);
        $_TPL.append($_choice);
        $_TPL.append($_inputbox);
        $_TPL.append($_searchBtn);
        return $_TPL;
    }

    resolveWebsites(websites) {
        let _TPL = `
            <div class="mokou-search-panel">

            </div>
        `;
        let $TPL = $(_TPL);
        for (let i in websites) {
            let $_nav = $('<ul class="mokou-search-panel-nav"></ul>');
            let $_title = $('<li class="mokou-search-panel-nav-list-title" style="background-color:' + this.getRandomColor() + '">' + i + '</li>');
            $_nav.append($_title);
            for (let j in websites[i]) {
                let $_list = $('<li class="mokou-search-panel-nav-list">' + j + '</li>');
                $_list.on('click', () => {
                    window.open(websites[i][j]);
                });
                $_nav.append($_list);
            }
            $TPL.append($_nav);
        }
        return $TPL;
    }

    ifSearch(val) {
        window.open(this.searchInterface + val);
    }

    listenerKeyboard($dom) {
        $(document).on('keydown', (e) => {
            e = e || event;
            let keyCode = e.keyCode;
            console.log(e.key + ':' + e.keyCode);
            switch (keyCode) {
                case 13:
                    if ($dom.is(':focus')) {
                        this.ifSearch($dom.val());
                    }
                    break;
            }
        });
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
