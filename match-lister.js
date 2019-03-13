var CreatMatchTable = function(matches){
    var body = document.getElementsByTagName('body')[0];
    var tableContainer = document.createElement('div');
    var table = document.createElement('table');
    table.style.width = '80%';
    table.setAttribute('border', '1');
    matches.forEach(match => {
        var rowHeader = document.createElement('tr');
        var row = document.createElement('tr');
        rowHeader.appendChild(CreatTableElementWithText('th',"Venue"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Home team"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Goals"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Penalties"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Guest team"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Goals"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Penalties"));
        rowHeader.appendChild(CreatTableElementWithText('th',"Winner"));
        row.appendChild(CreatTableElementWithText('td',match["venue"]));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["country"]));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["goals"]));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["penalties"]));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["country"]));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["goals"]));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["penalties"]));
        row.appendChild(CreatTableElementWithText('td',match["winner"]));
        /*
        rowHeader.appendChild(document.createElement('th').innerText = "Venue");
        rowHeader.appendChild(document.createElement('th').innerText = "Home team");
        rowHeader.appendChild(document.createElement('th').innerText = "Goals");
        rowHeader.appendChild(document.createElement('th').innerText = "Penalties");
        rowHeader.appendChild(document.createElement('th').innerText = "Guest team");
        rowHeader.appendChild(document.createElement('th').innerText = "Goals");
        rowHeader.appendChild(document.createElement('th').innerText = "Penalties");
        row.appendChild(document.createElement('td').innerText =match["venue"]);               
        row.appendChild(document.createElement('td').innerText = match["home_team"]["country"]);
        row.appendChild(document.createElement('td').innerText = match["home_team"]["goals"]);
        row.appendChild(document.createElement('td').innerText = match["home_team"]["penalties"]);
        row.appendChild(document.createElement('td').innerText = match["away_team"]["country"]);
        row.appendChild(document.createElement('td').innerText = match["away_team"]["goals"]);
        row.appendChild(document.createElement('td').innerText = match["away_team"]["penalties"]);
        */
        table.appendChild(rowHeader);
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
    body.appendChild(tableContainer);
}

var CreatTableElementWithText = function(type,text){
    var element = document.createElement(type);
    element.innerText = text;
    return element;
}