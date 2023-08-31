// quiz.js

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0, 0]; // Assuming each answer corresponds to one of the five results

const questions = [
    {
        question: "Your first question here?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
    },
    {
      question: "Your second question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your third question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 4th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 5th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 6th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 7th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 8th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 9th question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 10 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 11 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 12 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 13 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 14 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 15 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 16 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 17 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 18 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 19 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 20 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 21 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 22 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 23 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 24 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] // This is just an example. Adjust scores as needed.
  },
  {
      question: "Your 25 question here?",
      answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      score: [0, 1, 2, 3] 
  }
    
];

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    let html = `<h2>${question.question}</h2>`;
    
    question.answers.forEach((answer, index) => {
        html += `<button onclick="selectAnswer(${index})">${answer}</button>`;
    });

    if (currentQuestionIndex > 0) {
        html += '<button onclick="previousQuestion()">Previous</button>';
    }

    document.getElementById('quiz-container').innerHTML = html;
}

function selectAnswer(answerIndex) {
    scores[currentQuestionIndex] = questions[currentQuestionIndex].score[answerIndex];
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        // Show user info form
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function submitQuiz() {
    // Here, you'd send the scores and user info to your server or CRM
    // For now, we'll just calculate the result and alert it
    const totalScore = scores.reduce((a, b) => a + b, 0);
    let result = "Unknown"; // Default result

    if (totalScore < 15) {
        result = "Original Barbie";
    } else if (totalScore < 30) {
        result = "Malibu Barbie";
    } else if (totalScore < 45) {
            result = "Fashion Fever Barbie";
      } else if (totalScore < 60) {
            result = "Silkstone Barbie";
      } else {
            result = "Barbie Signature";
      };
    alert(`Hello ${document.getElementById('name').value}, your result is: ${result}`);
}

// Start the quiz
renderQuestion();
