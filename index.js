let score1 = 0
let score2 = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
console.log(homeScore)

function addOneHome(){
    score1+=1
    homeScore.innerText = score1
}

function addTwoHome(){
    score1+=2
    homeScore.innerText = score1
}

function addThreeHome(){
    score1+=3
    homeScore.innerText = score1
}

function addOneGuest(){
    score2+=1
    guestScore.innerText = score2
}

function addTwoGuest(){
    score2+=2
    guestScore.innerText = score2
}

function addThreeGuest(){
    score2+=3
    guestScore.innerText = score2
}

function resetButton(){
    homeScore.innerText = 0
    guestScore.innerText = 0
}