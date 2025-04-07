import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const arrCards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
	const randomNum = Math.floor(Math.random() * arrCards.length)
  let newCard = arrCards[randomNum]
  
  let accessNumber = document.getElementById("number")
  accessNumber.innerHTML = `${newCard}`
  
  let suitRandom = ['spade', 'heart', 'club','diamond']
  let randomSuit = Math.floor(Math.random() * suitRandom.length)
  let newSuit = suitRandom[randomSuit]

  let spanLeft =  document.getElementById("icon-left").querySelector("span")
  let spanRight = document.getElementById("icon-right").querySelector("span")

    if(newSuit === 'spade'){
      spanLeft.classList.add("spade")
      spanLeft.innerHTML =("♠")
      spanRight.classList.add("flipped-spade")
      spanRight.innerHTML =("♠")
    } else if(newSuit === "heart"){
      spanLeft.classList.add("heart")
      spanLeft.innerHTML =("♥")
      spanRight.classList.add("flipped-heart")
      spanRight.innerHTML =("♥")
    } else if(newSuit === "club"){
      spanLeft.classList.add("club")
      spanLeft.innerHTML= ("♣")
      spanRight.classList.add("flipped-club")
      spanRight.innerHTML= ("♣")
    } else if(newSuit === "diamond"){
      spanLeft.classList.add("diamond")
      spanLeft.innerHTML= ("♦")
      spanRight.classList.add("flipped-diamond")
      spanRight.innerHTML= ("♦")
    }
    
};
