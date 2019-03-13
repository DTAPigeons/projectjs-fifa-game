var AjaxHelper = {
    ajax:null
};
AjaxHelper.Initialize = function(){
    if(!this.ajax){
        this.ajax = new XMLHttpRequest();
    }

    return this.ajax;
}

AjaxHelper.get = function(url,header,callback){
    var request = this.Initialize();
    if(header!=null && header!=""){ request.setRequestHeader(header.name,header.value); }
    request.open("GET",url);
    request.onload = () => {
        callback(JSON.parse(request.responseText));
    }
    request.send();
}