let yourChoise;
let computerChoise;
let hand = ["rock", "papper", "scissor"];
let rock = document.getElementById("images").firstElementChild;
let res = document.getElementById("result")
let myScore = 0;
let compScore = 0;
let spanMyScore = document.getElementById("myScore")
let spanCompScore = document.getElementById("computerScore")
let compres = document.getElementById("compRes");
let userres = document.getElementById("userRes");
let reset = document.getElementById("reset")

rock.addEventListener('click', event => {
    yourChoise = "rock";
    computerChoise = hand[Math.floor(Math.random() * 3)]
    console.log(computerChoise);
    if (yourChoise === computerChoise) {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "Match Draw!";
            if(res.classList.contains("lose")) {
                res.classList.remove("lose");
            }
            if (res.classList.contains("win")) {
                res.classList.remove("win");
            }
        }, 500);
    }
    else if (computerChoise === "papper") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You Lose!";
            if(res.classList.contains("win")){
                res.classList.remove("win");
                res.classList.add("lose");
            }
            res.classList.add("lose");
            compScore += 1;
            spanCompScore.textContent = `${compScore}`;
        }, 500);
    }
    else if (computerChoise === "scissor") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You win!";
            if (res.classList.contains("lose")) {
                res.classList.remove("lose");
                res.classList.add("win");
            }
            res.classList.add("win");
            myScore += 1;
            spanMyScore.textContent = `${myScore}`;
        }, 500);
    }
})


rock.nextElementSibling.addEventListener('click', event => {
    yourChoise = "papper";
    computerChoise = hand[Math.floor(Math.random() * 3)]
    console.log(computerChoise);
    if (yourChoise === computerChoise) {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "Match Draw!";
            if(res.classList.contains("lose")) {
                res.classList.remove("lose");
            }
            if (res.classList.contains("win")) {
                res.classList.remove("win");
            }
        }, 500);
    }
    else if (computerChoise === "scissor") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You Lose!";
            if(res.classList.contains("win")){
                res.classList.remove("win");
                res.classList.add("lose");
            }
            res.classList.add("lose");
            compScore += 1;
            spanCompScore.textContent = `${compScore}`;
        }, 500);
    }
    else if (computerChoise === "rock") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You win!";
            if (res.classList.contains("lose")) {
                res.classList.remove("lose");
                res.classList.add("win");
            }
            res.classList.add("win");
            myScore += 1;
            spanMyScore.textContent = `${myScore}`;
        }, 500);
    }
})


rock.nextElementSibling.nextElementSibling.addEventListener('click', event => {
    yourChoise = "scissor";
    computerChoise = hand[Math.floor(Math.random() * 3)]
    console.log(computerChoise);
    if (yourChoise === computerChoise) {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "Match Draw!";
            if(res.classList.contains("lose")) {
                res.classList.remove("lose");
            }
            if (res.classList.contains("win")) {
                res.classList.remove("win");
            }
        }, 500);
    }
    else if (computerChoise === "rock") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You Lose!";
            if(res.classList.contains("win")){
                res.classList.remove("win");
                res.classList.add("lose");
            }
            res.classList.add("lose");
            compScore += 1;
            spanCompScore.textContent = `${compScore}`;
        }, 500);
    }
    else if (computerChoise === "papper") {
        res.textContent = "----";
        setTimeout(() => {
            compres.textContent = `${computerChoise}`
            userres.textContent = `${yourChoise}`
            res.textContent = "You win!";
            if (res.classList.contains("lose")) {
                res.classList.remove("lose");
                res.classList.add("win");
            }
            res.classList.add("win");
            myScore += 1;
            spanMyScore.textContent = `${myScore}`;
        }, 500);
    }
})
// localstorage.setItem("userScore", `${myScore}`);
// localstorage.setItem("compScore", `${compScore}`);

// document.addEventListener('DOMContentLoaded', () => {
//     myScore = localstorage.getItem("userScore");
//     compScore = localstorage.getItem("compScore");
    
// })

reset.addEventListener('click', () => {
    myScore = 0;
    compScore = 0;
    userres.textContent = "----"
    compres.textContent = "----"
    spanMyScore.textContent = "0"
    spanCompScore.textContent = "0"
    res.textContent = "Result"
    // localStorage.clear();
})