// Poke Tony
// v0.0.1

var whoAmIPoking = "Tony"
var howOften = 30000 // 30 seconds

setInterval(function(){ 
  var poke = document.getElementById("poke_live_new").querySelectorAll("[rel=async-post]")
  if(poke.length > 0) {
    if(poke[0].getAttribute("title") != "Remove") {
      poke[0].click();
      console.log(whoAmIPoking + " poked!");
    } else {
      console.log("No pokes to poke back.");
    }
  } else {
    console.log("No pokes to poke back.");
  }
}, howOften); 
