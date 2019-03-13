var GROUPS_END_POINT = "http://worldcup.sfg.io/teams/group_results";
var ListGroupDetailsByName = function(name){
    AjaxHelper.get(GROUPS_END_POINT,"",function(groups){ DisplayGroupDetails(groups,name)});
}

var DisplayGroupDetails = function(groups,name){
    var index = groups.findIndex(group=> group["letter"] == name)
    var group = groups[index];
    if(!group) throw "No such country";
    
    var contents = document.getElementById("contents");
    while(contents.firstChild){
        contents.removeChild(contents.firstChild);
    }

    var name = document.createElement('h2');
    name.innerText = "Name: " + group["letter"];
    contents.appendChild(name);
    contents.appendChild(document.createElement('br'));

    var teams = group["ordered_teams"];
    var tableContainer = document.createElement('div');
    var table = document.createElement('table');
    table.style.width = '80%';
    table.setAttribute('border', '1');
    var rowHeader = document.createElement('tr');
    rowHeader.appendChild(CreatTableElement('th',"Team"));
    rowHeader.appendChild(CreatTableElement('th',"Wins"));
    rowHeader.appendChild(CreatTableElement('th',"Losses"));
    rowHeader.appendChild(CreatTableElement('th',"Ties"));
    table.appendChild(rowHeader);

    teams.forEach(team => {
        var row = document.createElement('tr');
        row.appendChild(CreatTableElement('td',team["country"]));
        row.appendChild(CreatTableElement('td',team["wins"]));
        row.appendChild(CreatTableElement('td',team["losses"]));
        row.appendChild(CreatTableElement('td',team["draws"]));
        table.appendChild(row);
    });

    tableContainer.appendChild(table);

    contents.appendChild(tableContainer)
}

var CreatTableElement = function(type,text){
    var element = document.createElement(type);
    element.innerText = text;
    return element;
}