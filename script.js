

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const startButton = document.getElementById('start-btn');
const game = document.getElementById("game");
const container = document.querySelector(".container");
const start = document.querySelector(".start");
const timer = document.getElementById("timer");
const continueButton = document.getElementById("continue");
const rules = document.querySelector(".rules")
let currentQuestion;
let countQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let time = 15;
timer.innerHTML = `Time left: ${time}`
let timeInterval;
let correctAns = 0;
let incorrectAns = 0;
let arr = [];
function displayQuestion() {
  clearInterval(timeInterval);
  currentQuestion = randomNumber();

  arr.forEach(element => {
    if (element == currentQuestion) {
      currentQuestion = randomNumber();
    }
  });
  arr.push(currentQuestion);

  console.log(currentQuestion);
  console.log(arr);

  time = 15;
  timeInterval = setInterval(() => {
    if (time > 0) {
      timer.style.display = "inline-block"
      time--;
      timer.innerHTML = `Time left: ${time}`
      if(time<10){
        timer.innerHTML = `Time left: 0${time}`
      }
    }

    else {
      clearInterval(timeInterval);
      timer.style.display = "none";
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: '',
        correctAnswer: quizData[currentQuestion].answer,
      });

      currentQuestion = randomNumber();

      arr.forEach(element => {
        if (element == currentQuestion) {
          currentQuestion = randomNumber();
        }
      });

      arr.push(currentQuestion);

      console.log(currentQuestion);
      console.log(arr);

      countQuestion++;
      if (countQuestion < 5) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }, 1000);

  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = `Q${countQuestion+1}. ${questionData.question}`;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];

  for (let i = 0; i < 4; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      correctAns++;
      score = score + 3;
    }
    else {
      incorrectAns++;
      score = score - 1;
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    countQuestion++;
    selectedOption.checked = false;
    if (countQuestion < 5) {
      clearInterval(timeInterval);
      displayQuestion();
    } else {
      clearInterval(timeInterval);
      timer.style.display = 'none';
      displayResult();
    }
  }
  // else{
  //   incorrectAnswers.push({
  //     question: quizData[currentQuestion].question,
  //     incorrectAnswer: '',
  //     correctAnswer: quizData[currentQuestion].answer,
  //   });
  // }
}

function displayResult() {
  timer.innerHTML = `Times Up`
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  resultContainer.style.display = 'block'
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${5 * 3}!`;
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
  }

  resultContainer.innerHTML = `
      <h3>You scored ${score} out of ${5 * 3}!</h3>
      <p>Correct Answers: ${correctAns}</p>
      <p>Incorrect Answers: ${incorrectAns}</p>
      <h3>~ Your Incorrect Answers ~</h3>
      ${incorrectAnswersHtml}
    `;
}

submitButton.addEventListener('click', checkAnswer);
showAnswerButton.addEventListener('click', () => {
  resultContainer.style.display = "block";
  showAnswer();
});

startButton.addEventListener("click", () => {

  start.style.display = "none";
  rules.style.display = "block";
  displayQuestion();
})

continueButton.addEventListener("click", () => {
  rules.style.display = "none";
  game.style.display = "block";
})

function randomNumber() {
  random = Math.floor(Math.random() * 50);   
  return random;
}