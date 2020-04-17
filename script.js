const game = () => {
  let pScore = 0;
  let cScore = 0;
  const winner = document.querySelector('.winner');
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach((hand) => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });

    //computer options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach((option) => {
      option.addEventListener('click', function () {
        //computer choice
        const computerNumber = Math.floor(Math.random() * 3); //random 0-3
        const computerChoice = computerOptions[computerNumber];

        //reset when every option is clicked
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        winner.textContent = 'Loading...';

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';

        //to show after the animation
        setTimeout(() => {
          //call compareHands
          compareHands(this.textContent, computerChoice);

          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //comparison
  const compareHands = (playerChoice, computerChoice) => {
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }

    //check for rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }

    //check for paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }
    }

    //check for scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //call all the inner function
  startGame();
  playMatch();
};

game();
