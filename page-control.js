var MATCHES_END_POINT = "http://worldcup.sfg.io/matches";
AjaxHelper.get(MATCHES_END_POINT,"",CreatMatchTable);
var FilterMatchTable= function(){
    AjaxHelper.get(MATCHES_END_POINT,"",FilterTable);
}