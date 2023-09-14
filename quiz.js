// quiz.js

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0]; // Assuming each answer corresponds to one of the five results

const questions = [
    {
        question: "How soon do you want to move?",
        answers: ["I need to move like yesterday",
         "I want to move in before Christmas", 
         "I am dreaming now but will move when I find exactly what I am looking for"],
        score: [0, 1, 2] // This is just an example. Adjust scores as needed.
    },
    {
        question: "What's your design influence?",
        answers: ["I don't really care and I want someone else to handle all the details", 
        "I have some ideas, but could use some help making sure they all work together", 
        "I should have been a designer and I want to choose every finish from house color to bathroom tile"],
        score: [0, 1, 2] // This is just an example. Adjust scores as needed.
    },
    {
        question: "What kind of home plan is appealing to you?",
        answers: ["I know how many rooms I need and leave the layout to the professionals", 
        "I have some specific needs but I’m not sure where to start", 
        "I am one of a kind and my home design needs to reflect that"],
        score: [0, 1, 2] // This is just an example. Adjust scores as needed.
    },
    {
        question: "How big is your dream yard?",
        answers: ["I don't care for yard work, give me something small", 
        "I need room to roam, but something I can maintain ", 
        "I’m starting a farm, I want something huge!"],
        score: [0, 1, 2] // This is just an example. Adjust scores as needed.
    },
    {
        question: "What style of community do you see yourself in?",
        answers: ["I enjoy having neighbors close by, and bring on the block parties!", 
        "I am flexible on where I live to get the home I want.", 
        "I don’t want to see my neighbors"],
        score: [0, 1, 2] // This is just an example. Adjust scores as needed.
    },
    {
        question: "What is your budget like?",
        answers: ["I have no budget for my dream home.", "I’ve worked really hard for this home and I know what I want but I have a budget", 
        "Have you seen this economy? Lets keep costs down"],
        score: [2, 1, 0] // This is just an example. Adjust scores as needed.
    },
    {
        question: "How do you feel about an HOA?",
        answers: ["I would never move into an HOA", 
        "I’d be curious to see what an HOA can do for me", 
        "I LOVE how nice HOA communities look!"],
        score: [2, 1, 0] // This is just an example. Adjust scores as needed.
    },
    {
        question: "How involved would you like to be in building your home?",
        answers: ["I’ll oversee every detail!", 
        "I want to stay informed but leave the decisions to the expert", 
        "Please don't bore me with this."],
        score: [2, 1, 0] // This is just an example. Adjust scores as needed.
    }
    
];

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    let html = `<h2>${question.question}</h2>`;
    
    question.answers.forEach((answer, index) => {
        let isChecked = index === scores[currentQuestionIndex] ? "checked" : "";
        html += `<input type="radio" name="answer" value="${index}" id="answer${index}" ${isChecked}>`;
        html += `<label for="answer${index}">${answer}</label><br>`;
    });
    
    html += `<button onclick="selectAnswer()">Next</button>`;

    if (currentQuestionIndex > 0) {
        html += '<button onclick="previousQuestion()">Previous</button>';
    }

    document.getElementById('quiz-container').innerHTML = html;
}


function selectAnswer() {
    const selectedRadio = document.querySelector('input[name="answer"]:checked');
    if (!selectedRadio) {
        alert("Please select an answer!");
        return;
    }
    const answerIndex = parseInt(selectedRadio.value);
    scores[currentQuestionIndex] = answerIndex;
    
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
    const totalScore = scores.map((answerIndex, questionIndex) => questions[questionIndex].score[answerIndex]).reduce((a, b) => a + b, 0);

    let result = "Unknown"; // Default result

    if (totalScore <= 4) {
        result = "Quick Move In Homes";
    } else if (totalScore <= 8) {
        result = "Semi-Custom Homes";
    } else if (totalScore <= 12) {
        result = "Custom Homes";
    } else {
        result = "On Your Lot";
    };
    
    alert(`Hello ${document.getElementById('name').value}, your result is: ${result}`);
}

function resetQuiz() {
    console.log("resetting...")
    currentQuestionIndex = 0;
    scores.fill(0); // Reset all scores to 0

    // Show the quiz container and hide the user info form (if it's visible)
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';

    renderQuestion(); // Render the first question
}

// Start the quiz
renderQuestion();
