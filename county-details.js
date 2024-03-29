var TEAMS_END_POINT = "http://worldcup.sfg.io/teams/";
var DisplayCountryDetails = function(name){
    AjaxHelper.get(TEAMS_END_POINT,"",function(countries){ DisplayDetails(countries,name)});
   
}

var DisplayDetails = function(countries,name){
    var index = countries.findIndex(country=> country["country"] == name)
    var country = countries[index];
    if(!country) throw "No such country";

    var contents = document.getElementById("contents");
    while(contents.firstChild){
        contents.removeChild(contents.firstChild);
    }

    var name = document.createElement('h2');
    name.innerText = "Name: " + country["country"];
    contents.appendChild(name);
    contents.appendChild(document.createElement('br'));

    var fifa_code = document.createElement('h2');
    fifa_code.innerText = "FIFA Code: " + country["fifa_code"];
    contents.appendChild(fifa_code);
    contents.appendChild(document.createElement('br'));

    var group = document.createElement('h2');
    group.innerText = "Group: " + country["group_letter"];
    group.addEventListener("click",function(){ListGroupDetailsByName(country["group_letter"]); GroupDetailsClicked(country["group_letter"])});
    contents.appendChild(group);
    contents.appendChild(document.createElement('br'));
}

var GetAllCountries = function(countries){
    return countries;
}

var GroupDetailsClicked = function(name){
    var today = new Date();
    var dateText = today.getFullYear()+
    '-'+(today.getMonth()+1)+'-'+today.getDate()+" "+
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.actions+="At "+ dateText+ " the user was looking at details about " + name + "group"+" /n ";
    localStorage.actions;
}