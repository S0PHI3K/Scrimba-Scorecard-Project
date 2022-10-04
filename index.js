

// Highlight the leader 
// Add a few more counters e.g. period, fouls, timer
// Change the design

let homeScoreCard = document.getElementById('home-score-card')
let guest = document.getElementById('guest')
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeCount = 0

let guestCount = 0

function add1PointHome () {
    homeCount += 1
    homeScore.innerText = homeCount
}

function add1PointGuest () {
    guestCount += 1
    guestScore.innerText = guestCount
}

function add2PointsHome () {
    homeCount += 2
    homeScore.innerText = homeCount
}

function add2PointsGuest () {
    guestCount += 2
    guestScore.innerText = guestCount
}

function add3PointsHome () {
    homeCount += 3
    homeScore.innerText = homeCount
}

function add3PointsGuest () {
    guestCount += 3
    guestScore.innerText = guestCount
}

function newGame () {
    homeCount = 0
    guestCount = 0
    homeScore.innerText = homeCount
    guestScore.innerText = guestCount
}

