const btn_rock = document.getElementById("rock");
const btn_paper = document.getElementById("paper");
const btn_scissors = document.getElementById("scissors");
const text_player = document.getElementById("player-score");
const text_computer = document.getElementById("comp-score");
const h2_content = document.getElementById("text_d");
let player_score = 0;
let comp_score = 0;

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const c = Math.floor(Math.random() * 3);
    return choice[c];
}

// Fonction pour jouer un tour de pierre-papier-ciseaux
function playRound(playerSelection, computerSelection) {
    // Convertir le choix du joueur en minuscules pour la comparaison insensible à la casse
    const playerChoice = playerSelection.toLowerCase();

    // Vérifier l'égalité
    if (playerChoice === computerSelection) {
        h2_content.innerText = "It's a tie! Play again.";
    }

    // Déterminer le vainqueur du tour
    if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        h2_content.innerText = `You Win! ${playerChoice} beats ${computerSelection}.`;
        player_score++;
        text_player.innerText = player_score;
        if (player_score == 5) {
            // Si le joueur atteint 5 points, réinitialisez le jeu
            init();
        }
    } else if (
        (computerSelection === 'rock' && playerChoice === 'scissors') ||
        (computerSelection === 'paper' && playerChoice === 'rock') ||
        (computerSelection === 'scissors' && playerChoice === 'paper')
    ) {
        h2_content.innerText = `You Lose! ${computerSelection} beats ${playerChoice}.`;
        comp_score++;
        text_computer.innerText = comp_score;
        if (comp_score == 5) {
            // Si l'ordinateur atteint 5 points, réinitialisez le jeu
            init();
        }
    }
}

btn_rock.addEventListener('click', () => {
    const p = btn_rock.value;
    const c = getComputerChoice();
    playRound(p, c);
});

btn_paper.addEventListener('click', () => {
    const p = btn_paper.value;
    const c = getComputerChoice();
    playRound(p, c);
});

btn_scissors.addEventListener('click', () => {
    const p = btn_scissors.value;
    const c = getComputerChoice();
    playRound(p, c);
});

// Fonction pour réinitialiser le jeu
function init() {
    player_score = 0;
    comp_score = 0;
    text_player.innerText = player_score;
    text_computer.innerText = comp_score;
    h2_content.innerText = "make your choice by clicking an icon";
}
