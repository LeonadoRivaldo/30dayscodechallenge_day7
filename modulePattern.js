var helper = (function() {
    var links = [];
    var getHelper = function(selector, cb){
        links = document.querySelectorAll(selector);
        if(cb){
            cb(links);
        }
    }
    var createLinks = function(array){
        if(!array){
            array = links;
            console.log('sem parametro');
        }else{
            console.log("com parametro");
        }
        array.forEach(function(el){

            if( !el.dataset.url && !el.dataset.href ){
                alert("URL is needed use data-url or data-href");
            }

            var title = el.dataset.title || el.dataset.label;
            var href = el.dataset.url || el.dataset.href;

            var link = '<a style="color:inherit;vertical-align:top;font-size:14px;" title="'+title+'" href="//'+href+'" target="_blank"><i class="fa fa-question-circle" aria-hidden="true"></i></a>';
            el.innerHTML += link;
        });               
    }; 
    return{
        get:getHelper,
        create:createLinks
    }       
})(window, document);

//use data-title for link title, and data-url for link url;
//continue on lunch