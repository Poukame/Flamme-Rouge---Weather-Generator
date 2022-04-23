const tokens = ["Fair","Fair","Fair","Fair","Fair","Fair","Fair","Fair","Fair","Crosswind","Tailwind", "Headwind", "Wet"];
const generateBtn = document.getElementById("generate-btn");
let token1 = document.getElementById("token-1");
let token2 = document.getElementById("token-2");
let token3 = document.getElementById("token-3");
let token4 = document.getElementById("token-4");
let token5 = document.getElementById("token-5");
let token6 = document.getElementById("token-6");
let token7 = document.getElementById("token-7");

generateBtn.addEventListener("click", function(){generate()});

generate();

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

 function generate() {
  shuffle(tokens);
  token1.innerHTML = tokens[0];
  token2.innerHTML = tokens[1];
  token3.innerHTML = tokens[2];
  token4.innerHTML = tokens[3];
  token5.innerHTML = tokens[4];
  token6.innerHTML = tokens[5];
  token7.innerHTML = tokens[6];
 };

 



