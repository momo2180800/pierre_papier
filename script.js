console.log("hello world!");
function getComputerChoice(){
    const choice=["pierre","papier","ciseau"];
    const c=Math.floor(Math.random()*3)
    return choice[c];
}
// Fonction pour jouer un tour de pierre-papier-ciseaux
function playRound(playerSelection, computerSelection) {
    // Convertir le choix du joueur en majuscules pour la comparaison insensible à la casse
    const playerChoice = playerSelection.toLowerCase;
  
    // Vérifier l'égalité
    if (playerChoice === computerSelection) {
      return "It's a tie! Play again.";
    }
  
    // Déterminer le vainqueur du tour
    if (
      (playerChoice === 'rock' && computerSelection === 'scissors') ||
      (playerChoice === 'paper' && computerSelection === 'rock') ||
      (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
  }
  
  // Exemple d'utilisation
  function game(){
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++){
        let playerSelection=prompt("donner votre choix");
        let computerSelection=getComputerChoice();
        playRound(playerSelection,computerSelection);
        if(playRound(playerSelection, computerSelection)==`You Win! ${playerSelection} beats ${computerSelection}.`)
        {
            playerScore++;
        }
        else {
        computerScore++;
        }
        console.log("Player score",playerScore,"Computer score",computerScore);
    }
    
  }
  game();