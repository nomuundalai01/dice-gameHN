// togm=loon=miin buh gazart ashiglah global  end 
// togloom duussan eseh hadgalah eseh 
var isnewOver ; 
var activePlayer = 0 ; 
var scores=0 ; 
var roundScore=0 ; 
// shoo zurgiig uzuuleh 
var diceDom = document.querySelector(".dice") ;

//  togloom ihluuleh 
innitgame () ;

function innitgame () { 
    // togloom duussan uu 
    isnewOver = true ; 
    // toglogchiin eejiig hadaglah huvdsagch negdugeer toglogchiig 0 harin toglolgl ch 2iig 1 gene 
activePlayer = 0 ; 

// toglogchiin eejiig hadaglaj onoog hadaglah 
scores = [0,0] ; 

// togolchiin eeljind tsugluulj bga onoog hadaglah in 
roundScore = 0 ; 

// shoo ali talaaraa buusniig hadaglah huvsaghc heregtei 1-6 gesen ene huvsagchid sanamsarguigeer uusgej ogno 

// ajluulhad beltgeh 
document.getElementById("score-0").textContent = "0" ; 
document.getElementById("score-1").textContent = "0"; 
document.getElementById("current-0").textContent = "0"; 
document.getElementById("current-1").textContent = "0" ;

// toglogchdiin neriig gerah 
document.getElementById("name-0").textContent = "player 1" ;
document.getElementById("name-1").textContent = "player 2" ;

document.querySelector(".player-0-panel").classList.remove("winner") ;
document.querySelector(".player-1-panel").classList.remove("winner") ;

document.querySelector(".player-0-panel").classList.remove("active") ;
document.querySelector(".player-1-panel").classList.remove("active") ;
document.querySelector(".player-0-panel").classList.add("active") ;

diceDom.style.display = "none" ;
}

// shoog shiddeg bolson bna 
document.querySelector(".btn-roll").addEventListener("click" , function () {
if(isnewOver !== false){

    // 1-6 hurtel sanaandgui neg too gargaj avna 
    var diceNumber = Math.floor(Math.random()*6) +1 ; 

    // shoonii zurag gargaj ireh
    diceDom.style.display = "block" ;

    // buusan tooniii hargalzah zurgiig veb deer gergej irne 
    diceDom.src = 'dice-' + diceNumber + ".png";
    
    // buusan too ni 1 ees yalgaatai bol idhevtei toglogchiin onoog nemegduulne toglogchiin eeljiin onoog ooochilno ; 
    if(diceNumber !== 1){
        // 1 - ees yalgaatai too buulaa buusan too nemj ogno .
        roundScore = roundScore + diceNumber ; 
        document.getElementById("current-" + activePlayer).textContent = roundScore ; 
    }else{
        // 1 buusan too tul toglogchiin eeljiig solj bna 

        //  toglogchiin tsugluulsan onoog 0 bolgoh 
        switchToNExtplayer () ; 
        }
    }else{
        alert("tomlooom sussan bna new game tochiig dar")
    } 
}) ; 

// hold tovchnii 
document.querySelector(".btn-hold").addEventListener("click" ,  function(){
    if(isnewOver){
         // ug toglohchiin eeljind eeljnii onoog global onoon deer nemj ogno 
    // scores = [80,20] ;
    scores[activePlayer] = scores[activePlayer] + roundScore ; 

    // delgets deer onoog ni oorchloh 
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer] ;
    //  eeljiin onoog in 0 bolgon  

    // ug toglogchiin hojson esehiig 
    if(scores[activePlayer] >=100 ){
        // togloom duussan tolovt oruulan 
        isnewOver = false ; 

        // yallagch  gesen text 
        document.getElementById("name-" + activePlayer).textContent = "WINNER !!! " ;
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner") ;
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active") ;
    }else{
        // toglogchiin eeljiig solih 
        switchToNExtplayer () ; 
    }   
    }else{
        alert("tomlooom sussan bna new game tochiig dar")
    }
}) ; 

// eme fuction in togloh eeljiig daraachiiin toglogch ruu shiljulldeg 
function switchToNExtplayer() { 
 // 1 buusan too tul toglogchiin eeljiig solj bna 
        //  toglogchiin tsugluulsan onoog 0 bolgoh 
        roundScore = 0 ;
        document.getElementById("current-" + activePlayer).textContent = 0 ; 

        // toglogchiin eeljiig solih 
        // ugui bol 1 ni 0 bolgoh
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ; 
        // ulaan tseg haij oloh 
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

        // shoo tur alag bolgoh 
        diceDom.style.display = "none" ; 
}

//  shine togloom ihluuleh event 
document.querySelector(".btn-new").addEventListener("click" , innitgame) ; 
