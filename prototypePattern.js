var tabs = (function(window, document) {
    var tabsmodule = function(){
        this.tabs = [];
    };

    tabsmodule.prototype.setTabs = function(tabs, callback) {
        this.tabs = tabs;
        if(callback){
            callback(this.tabs);
        }
    };

    return tabsmodule;

})(window, document);

//use data-title for link title, and data-url for link url;
//continue on lunch