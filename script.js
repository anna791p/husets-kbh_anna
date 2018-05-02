
function fetchGameEvents(){
    fetch("http://annabellegoldsworthy.com/wordpress/wp-json/wp/v2/board_games")
        .then(e => e.json())
        .then(showGames)
}

function showGames(data){
    console.log(data);
    data.forEach(showSingleEvent)
}

function showSingleEvent(gEvent){
    console.log(gEvent)
    let template = document.querySelector("#bgetemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = gEvent.title.rendered;
    clone.querySelector(".descript").innerHTML = gEvent.content.rendered;
    clone.querySelector(".date").textContent = gEvent.acf.date;
    clone.querySelector(".time").textContent = gEvent.acf.time;
    clone.querySelector(".venue").textContent = gEvent.acf.venue;
    clone.querySelector(".price").textContent = gEvent.acf.price;

    let gamelist = document.querySelector("#gamelist");
    gamelist.appendChild(clone);
}
fetchGameEvents();



function fetchEdibles(){
    fetch()

}


