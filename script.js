console.log('Welcome to Tic Tac Toe');
let bgMusic = new Audio('daylight.mp3');
let turnMusic = new Audio('Ping.mp3');
let gameOverMusic = new Audio('gameover.mp3');
let turn = "X";
let isgameover = false;
// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 0, 5, 180],
        [3, 4, 5, 0, 15, 180],
        [6, 7, 8, 0, 25, 180],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15 ,90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + ' Won';
            isgameover = true;
            bgMusic.currentTime = 0;
            bgMusic.play();
            document.querySelector('.imgBox').getElementsByTagName("img")[0].style.border = "0.6vw solid #f290cf"
            document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "20vw";
            document.querySelector(".line").style.height = '1vh'
            document.querySelector(".line").style.width = '30vw'
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Gaming Logic

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add oncolick listnerer to reset
reset.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach((element) => {
        element.innerText = " ";
    })
    turn = "X";
    isgameover = false;
    bgMusic.pause();
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName("img")[0].style.border = "0vw";
    document.querySelector('.imgBox').getElementsByTagName("img")[0].style.width = "0vw";
    document.querySelector(".line").style.height = '0vh'
    document.querySelector(".line").style.width = '0vw'
    document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

})
