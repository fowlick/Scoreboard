let score = 0
let guestscore=0

let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")


function onePointHome(){
    score+=1
    homeScore.textContent = score
}

function twoPointHome(){
    score+=2
    homeScore.textContent = score
}

function threePointHome(){
    score+=3
    homeScore.textContent = score
}

function resetHome(){
    score=0
    homeScore.textContent = score
}


function onePointGuest(){
    guestscore+=1
    guestScore.textContent = guestscore
}

function twoPointGuest(){
    guestscore+=2
    guestScore.textContent = guestscore
}

function threePointGuest(){
    guestscore+=3
    guestScore.textContent = guestscore
}

function resetGuest(){
    guestscore=0
    guestScore.textContent = guestscore
}