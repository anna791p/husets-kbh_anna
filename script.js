
function fetchGameEvents(){
    fetch("http://annabellegoldsworthy.com/wordpress/wp-json/wp/v2/board_games?_embed")
        .then(e => e.json())
        .then(showGames)
}

function showGames(data){
    console.log(data);
    data.forEach(showSingleEvent)
}

function showSingleEvent(gEvent){
    //console.log(gEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url);
    let template = document.querySelector("#bgetemp").content;
    let clone = template.cloneNode(true);

    let day = gEvent.acf.date.substring(6, 8);
    let month = gEvent.acf.date.substring(4, 6);
    let year = gEvent.acf.date.substring(0, 4);

    clone.querySelector("h1").textContent = gEvent.title.rendered;
    clone.querySelector(".descript").innerHTML = gEvent.content.rendered;


    clone.querySelector(".date").textContent = day + "/" + month + "/" + year; // gEvent.acf.date;


    clone.querySelector(".time").textContent = gEvent.acf.time;
    clone.querySelector(".venue").textContent = gEvent.acf.venue;
    clone.querySelector(".price").textContent = gEvent.acf.price;


    if(gEvent._embedded["wp:featuredmedia"]){  //img is there
    clone.querySelector(".eventimg").setAttribute("src", gEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
   }  else {  // no img
        clone.querySelector(".eventimg").remove();
   }

    // can i use the above for the description thing with food??

    let gamelist = document.querySelector("#gamelist");
    gamelist.appendChild(clone);
}
fetchGameEvents();




function fetchEdibles(){
    fetch("http://annabellegoldsworthy.com/wordpress/wp-json/wp/v2/food")
        .then(e => e.json())
        .then(showFooDrink)
}

function showFooDrink(data){
    console.log(data);
    data.forEach(showSingleItem)
}

function showSingleItem(someFood){
    console.log(someFood)
    let template = document.querySelector("#fdtemp").content;
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = someFood.title.rendered;
    //clone.querySelctor(".descript").innerHTML = someFood.content.rendered;
    clone.querySelector(".price span").textContent = someFood.acf.price;


    let fooddrinklist = document.querySelector("#fooddrinklist");
    fooddrinklist.appendChild(clone);


}
fetchEdibles();





