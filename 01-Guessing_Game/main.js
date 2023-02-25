function guessNumber() {
    let playerGuess;
    const numberToGuess = Math.ceil(Math.random() * 10);
  
    prompt('Devinez le nombre entre 1 et 10');
  
    while(playerGuess != numberToGuess) {
      playerGuess = prompt('Echec! Essayez à nouveau !');
    }
  
    alert(`Félications! Le nombre était ${numberToGuess}!`);
  }
  
  guessNumber();