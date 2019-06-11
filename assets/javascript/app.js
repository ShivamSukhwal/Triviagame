(function() {
  const myQuestions = [
    {
      question: "When Is Indian Independence Day?",
      answers: {
        a: "July 4th, 1776",
        b: "August 15, 1947",
        c: "May 5th, 1882",
        d: "India was always Independent"
      },
      correctAnswer: "b"
    },
    {
      question:
        "The City Montessori School is the worlds largest school in terms of studnets. How many students does it have?",
      answers: {
        a: "20,000",
        b: "35,000",
        c: "45,000",
        d: "60,000"
      },
      correctAnswer: "c"
    },
    {
      question: "How many languages are recognized by the Indian Constitution?",
      answers: {
        a: "1",
        b: "2",
        c: "14",
        d: "22"
      },
      correctAnswer: "d"
    },
    {
      question: "True or False? Chess was made in India.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    }
  ];
  function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.questiooutputn} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    console.log(output);
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
var secondsDown = 5;
var timeIntervalUp = setInterval(function() {
  startTimer();
  console.log("two");
}, 1000);

function startTimer() {
  console.log("one");
  var count = document.getElementById("countDown");
  console.log(count);
  count.innerHTML = "Time Remaining: " + secondsDown;
  secondsDown--;

  if (secondsDown == 0) {
    clearInterval(timeIntervalUp);
    document.getElementById("countDown").innerHTML = "";
    showNextSlide();
  }
}
