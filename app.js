const myForm = document.querySelector('form');
const resultDiv = document.querySelector('.result');


myForm.addEventListener('submit', (juninho) => {
    juninho.preventDefault();
  
  let myScore = {
      score1: parseFloat(myForm.input1.value),
      score2: parseFloat(myForm.input2.value),

      totalScore() {
          return  parseFloat(myScore['score1'] * myScore['score2']).toLocaleString('en');
        }
    };

  let gbogboScore = (all) => {

    if (myScore.totalScore()) { 
      return `${myScore.score1} x ${myScore.score2} = ${all}`;

    };
    
  };
  document.getElementById('rb').textContent = gbogboScore(myScore.totalScore());
  
});



