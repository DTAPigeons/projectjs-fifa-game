var DisplayMatchDetails = function(match){
    if(!match){ throw "Invalid match data!"}
    var contents = document.getElementById("contents");
    while(contents.firstChild){
        contents.removeChild(contents.firstChild);
    }

    var venue = document.createElement('h2');
    venue.innerText = "Venue: " + match["venue"];
    contents.appendChild(venue);
    contents.appendChild(document.createElement('br'));

    var time = document.createElement('h2');
    time.innerText = "Time: " + match["datetime"];
    contents.appendChild(time);
    contents.appendChild(document.createElement('br'));

    var scoreHeader = document.createElement('h2');
    scoreHeader.innerText = "Score: ";
    contents.appendChild(scoreHeader);

    var homeTeam = document.createElement('h3');
    homeTeam.innerText = match["home_team"]["country"]+" : "+match["home_team"]["goals"];
    contents.appendChild(homeTeam);

    var awayTeam = document.createElement('h3');
    awayTeam.innerText = match["away_team"]["country"]+" : "+match["away_team"]["goals"];
    contents.appendChild(awayTeam);
    contents.appendChild(document.createElement('br'));

    var weatherHeader = document.createElement('h2');
    weatherHeader.innerText = "Weather: ";
    contents.appendChild(weatherHeader);

    var humidity = document.createElement('h3');
    humidity.innerText = "Humidity: " + match["weather"]["humidity"];
    contents.appendChild(humidity);

    var temp_celsius = document.createElement('h3');
    temp_celsius.innerText = "Temperature: " + match["weather"]["temp_celsius"];
    contents.appendChild(temp_celsius);

    var description = document.createElement('h3');
    description.innerHTML = match["weather"]["description"];
    contents.appendChild(description);

}