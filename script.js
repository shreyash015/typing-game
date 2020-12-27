let userName = "";
const highestScore = "";
const lowestScore = "";

const startGame = () => {
    userName = document.getElementById('playerName');
    window.location = ("http://127.0.0.1:5500/startGame-1.html");
}


const startCoundownTimer = () => {
    const timer = document.getElementById('timer').innerText;
    setInterval(() => {
        timer.split('').forEach((number) => {
            console.log(number);
        })
    },1000)
}