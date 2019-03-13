var MATCHES_END_POINT = "http://worldcup.sfg.io/matches";
if(!localStorage.actions){
    localStorage.setItem("actions","");
}
AjaxHelper.get(MATCHES_END_POINT,"",CreatMatchTable);
var FilterMatchTable= function(){
    AjaxHelper.get(MATCHES_END_POINT,"",FilterTable);
}