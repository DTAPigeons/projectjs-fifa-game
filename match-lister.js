var FilterTable = function(mathes){
    var venue = document.forms["search"]["venue"].value;
    var homeTeam = document.forms["search"]["home-team"].value;
    var guestTeam = document.forms["search"]["guest-team"].value;
    var winner = document.forms["search"]["winner"].value;

    SearchButtonClicked(venue,homeTeam,guestTeam,winner)
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
        rowHeader.appendChild(CreatTableElementWithText('th',"Venue",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Home team",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Goals",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Penalties",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Guest team",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Goals",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Penalties",match));
        rowHeader.appendChild(CreatTableElementWithText('th',"Winner",match));
        row.appendChild(CreatTableElementWithText('td',match["venue"],match));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["country"],match,true));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["goals"],match));
        row.appendChild(CreatTableElementWithText('td',match["home_team"]["penalties"],match));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["country"],match,true));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["goals"],match));
        row.appendChild(CreatTableElementWithText('td',match["away_team"]["penalties"],match));
        row.appendChild(CreatTableElementWithText('td',match["winner"]));
        row.appendChild(CreatTableElementWithText("BUTTON","Details",match));
        table.appendChild(rowHeader);
        table.appendChild(row);
    });
    tableContainer.appendChild(table);
}

var CreatTableElementWithText = function(type,text,match=null,isCountyField =false){
    var element = document.createElement(type);
    element.innerText = text;
    if(text=="Details"){
        element.addEventListener("click",function(){DisplayMatchDetails(match); MatchDetailsClicked(match)});
    }
    if(isCountyField){
        element.addEventListener("click",function(){DisplayCountryDetails(text); CountyDetailsClicked(text);});
    }
    return element;
}

var MatchDetailsClicked = function(match){
    var today = new Date();
    var dateText = today.getFullYear()+
    '-'+(today.getMonth()+1)+'-'+today.getDate()+" "+
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.actions+="At "+ dateText+ " the user was looking at details about the match between " + 
    match["home_team"]["country"] + " and " + match["away_team"]["country"]+" /n ";
    localStorage.actions;
}

var CountyDetailsClicked = function(name){
    var today = new Date();
    var dateText = today.getFullYear()+
    '-'+(today.getMonth()+1)+'-'+today.getDate()+" "+
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.actions+="At "+ dateText+ " the user was looking at details about " + name + "'s team"+" /n ";
    localStorage.actions;
}

var SearchButtonClicked = function(venue,homeTeam,guestTeam,winner){
    var today = new Date();
    var dateText = today.getFullYear()+
    '-'+(today.getMonth()+1)+'-'+today.getDate()+" "+
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.actions+="At "+ dateText+ " the user made the following search: Venue-" +
     venue + " Home Team-"+homeTeam+" Guest Team-"+guestTeam+ "Winner-"+winner+" /n ";
    localStorage.actions;
}