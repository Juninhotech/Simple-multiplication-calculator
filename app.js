const myForm = document.querySelector('form');
const resultDiv = document.querySelector('.result');
const subbtn = document.querySelector('#sub');


myForm.addEventListener('submit', (juninho) => {
    juninho.preventDefault();
  
  let myScore = {
      score1: (myForm.input1.value),
      score2: (myForm.input2.value),

      totalScore() {
          return  (myScore['score1'] * myScore['score2']).toLocaleString('en');
        }
    };

  let gbogboScore = (all) => {

    if (myScore.totalScore()) { 
      return `${myScore.score1} x ${myScore.score2} = ${all}`;

    };
    
  };
  document.getElementById('rb').textContent = gbogboScore(myScore.totalScore());
  
});

function resetKey() {
  document.getElementById('sub2').addEventListener('click', () => {
    myForm.reset();
    document.getElementById('rb').textContent = '';
  
  })
  
}
resetKey();




