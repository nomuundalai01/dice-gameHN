// toglogchiin eejiig hadaglah huvdsagch negdugeer toglogchiig 0 harin toglolgl ch 2iig 1 gene 
var activePlayer = 1 ; 

// toglogchiin eejiig hadaglaj onoog hadaglah 
var scores = [0,0] ; 

// togolchiin eeljind tsugluulj bga onoog hadaglah in 
var roundScore = 0 ; 

// shoo ali talaaraa buusniig hadaglah huvsaghc heregtei 1-6 gesen ene huvsagchid sanamsarguigeer uusgej ogno 

// ajluulhad beltgeh 
document.getElementById("score-0").textContent = "0" ; 
document.getElementById("score-1").textContent = "0"; 
document.getElementById("current-0").textContent = "0"; 
document.getElementById("current-1").textContent = "0" ;

var diceDom = document.querySelector(".dice") ; 
diceDom.style.display = "none" ; 

document.querySelector(".btn-roll").addEventListener("click" , function () {
    var diceNumber = Math.floor(Math.random()*6) +1 ; 

    diceDom.style.display = "block" ;
    diceDom.src = 'dice-' + diceNumber + ".png";

}) ; 


