var DisplayUserActions = function(){
    var contents = document.getElementById("contents");
    while(contents.firstChild){
        contents.removeChild(contents.firstChild);
    }

    var actions = localStorage.actions.split("/n");
    actions.forEach(action => {
        var elemet = document.createTextNode(action);
        contents.appendChild(elemet);
        contents.appendChild(document.createElement('br'))
    });
}