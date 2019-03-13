var FilterTable = function(mathes){
    var venue = document.forms["search"]["venue"].value;
    var homeTeam = document.forms["search"]["home-team"].value;
    var guestTeam = document.forms["search"]["guest-team"].value;
    var winner = document.forms["search"]["winner"].value;

    var matchesToDisplay = FilterMatches(mathes,venue,homeTeam,guestTeam,winner);
    
    CreatMatchTable(matchesToDisplay);
}

var FilterMatches = function(mathes,venue,homeTeam,guestTeam,winner){
    var result = mathes;
    if(venue){
        result = result.filter(match=>match["venue"].includes(venue));
    }
    if(homeTeam){
        result = result.filter(match=>match["home_team"]["country"].includes(homeTeam));
    }
    if(guestTeam){
        result = result.filter(match=>match["away_team"]["country"].includes(guestTeam));
    }
    if(winner){
        result = result.filter(match=>match["winner"].includes(winner));
    }

    return result;
}

var CreatMatchTable = function(matches){
    var tableContainer = document.getElementById("match-table");
    var table = document.createElement('table');
    while(tableContainer.firstChild){
        tableContainer.removeChild(tableContainer.firstChild);
    }
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
        table.appendChild(rowHeader);
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
}

var CreatTableElementWithText = function(type,text){
    var element = document.createElement(type);
    element.innerText = text;
    return element;
}