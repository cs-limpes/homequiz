// quiz.js

let currentQuestionIndex = 0;
let scores = [0, 0, 0, 0];
let userSelections = []; // To track user selections

const quickMoveInHomesResult = `
    <div class="result">
        <img src="images/Generation-Homes-NW-Quick-Move-In-Home.PNG" alt="Quick Move-In Homes">
        <h3>Quick Move-In Homes</h3>
        <p>You value efficiency and trust. You're not overly concerned with the minutiae of home design, focusing instead on other passions or simply enjoying a hassle-free life. Trust Generation Homes Northwest to provide you with a beautiful, ready-to-move-in home. <a href="https://generationhomesnw.com/plans/quick-move-homes/" target="_new">Browse our current selection here</a>.</p>
        <p>Still have questions or concerns? Explore the other home types below, call us at 360-355-3363. We're here to assist!</p>

        <img src="images/Generation-Homes-NW-Sem-Custom-Home.jpg" alt="Semi-Custom Homes">
        <h3>Semi-Custom Homes</h3>
        <p>You have a vision, but you also appreciate guidance. While you've seen many floor plans, none seem just right. Whether it's adjusting rooms, choosing finishes, or tweaking designs, you want a say. Generation Homes Northwest offers a plethora of home plans, and our design team is eager to tailor them to your needs. <a href="https://generationhomesnw.com/plans/" target="_new">Explore our plans here</a>.</p>
        <p>Unsure about this fit? Delve into the other home options below, reach out at 360-355-3363. Your satisfaction is our priority!</p>

        <img src="images/Generation-Homes-NW-Custom-Home.PNG" alt="Custom Homes">
        <h3>Custom Homes</h3>
        <p>Your dream home is unique, just like you. Whether you have a precise vision or simply know that standard plans won't do, Generation Homes Northwest is your partner in crafting that dream. With over 50 years of combined experience, we're as passionate about building homes as you are about living in them. <a href="https://generationhomesnw.com/custom-homes/">View our custom projects here</a> and let's embark on this journey together.</p>
        <p>Questions or second thoughts? Discover the other home styles below or give us a call at 360-355-3363. We're always eager to help!</p>

        <img src="images/Generation-Homes-NW-BOYL.PNG" alt="On Your Lot Homes">
        <h3>On Your Lot</h3>
        <p>Own a property in Vancouver, WA, or Clark County, Washington? Whether you're using one of our plans, modifying it, or starting from scratch, Generation Homes Northwest is thrilled to bring your vision to life on your lot. Even if you're still property hunting, our team can guide you in finding and evaluating the perfect spot. <a href="https://generationhomesnw.com/plans/homes-built-on-your-land/" target="_new">Learn more about building on your lot here</a>.</p>
        <p>Questions or second thoughts? Give us a call at 360-355-3363. We're always eager to help!</p>
    </div>
`;

const semiCustomHomesResult = `
    <div class="result">
        <img src="images/Generation-Homes-NW-Sem-Custom-Home.jpg" alt="Semi-Custom Homes">
        <h3>Semi-Custom Homes</h3>
        <p>You have a vision, but you also appreciate guidance. While you've seen many floor plans, none seem just right. Whether it's adjusting rooms, choosing finishes, or tweaking designs, you want a say. Generation Homes Northwest offers a plethora of home plans, and our design team is eager to tailor them to your needs. <a href="https://generationhomesnw.com/plans/" target="_new">Explore our plans here</a>.</p>
        <p>Unsure about this fit? Delve into the other home options below, reach out at 360-355-3363. Your satisfaction is our priority!</p>

        <img src="images/Generation-Homes-NW-Custom-Home.PNG" alt="Custom Homes">
        <h3>Custom Homes</h3>
        <p>Your dream home is unique, just like you. Whether you have a precise vision or simply know that standard plans won't do, Generation Homes Northwest is your partner in crafting that dream. With over 50 years of combined experience, we're as passionate about building homes as you are about living in them. <a href="https://generationhomesnw.com/custom-homes/">View our custom projects here</a> and let's embark on this journey together.</p>
        <p>Questions or second thoughts? Discover the other home styles below or give us a call at 360-355-3363. We're always eager to help!</p>

        <img src="images/Generation-Homes-NW-Quick-Move-In-Home.PNG" alt="Quick Move-In Homes">
        <h3>Quick Move-In Homes</h3>
        <p>You value efficiency and trust. You're not overly concerned with the minutiae of home design, focusing instead on other passions or simply enjoying a hassle-free life. Trust Generation Homes Northwest to provide you with a beautiful, ready-to-move-in home. <a href="https://generationhomesnw.com/plans/quick-move-homes/" target="_new">Browse our current selection here</a>.</p>
        <p>Still have questions or concerns? Explore the other home types below, call us at 360-355-3363. We're here to assist!</p>

        <img src="images/Generation-Homes-NW-BOYL.PNG" alt="On Your Lot Homes">
        <h3>On Your Lot</h3>
        <p>Own a property in Vancouver, WA, or Clark County, Washington? Whether you're using one of our plans, modifying it, or starting from scratch, Generation Homes Northwest is thrilled to bring your vision to life on your lot. Even if you're still property hunting, our team can guide you in finding and evaluating the perfect spot. <a href="https://generationhomesnw.com/plans/homes-built-on-your-land/" target="_new">Learn more about building on your lot here</a>.</p>
        <p>Questions or second thoughts? Give us a call at 360-355-3363. We're always eager to help!</p>
    </div>
`;

const buildOnYourLotResult = `
    <div class="result">
        <img src="images/Generation-Homes-NW-BOYL.PNG" alt="On Your Lot Homes">
        <h3>On Your Lot</h3>
        <p>Own a property in Vancouver, WA, or Clark County, Washington? Whether you're using one of our plans, modifying it, or starting from scratch, Generation Homes Northwest is thrilled to bring your vision to life on your lot. Even if you're still property hunting, our team can guide you in finding and evaluating the perfect spot. <a href="https://generationhomesnw.com/plans/homes-built-on-your-land/" target="_new">Learn more about building on your lot here</a>.</p>
        <p>Questions or second thoughts? Give us a call at 360-355-3363. We're always eager to help!</p>
    
        <img src="images/Generation-Homes-NW-Sem-Custom-Home.jpg" alt="Semi-Custom Homes">
        <h3>Semi-Custom Homes</h3>
        <p>You have a vision, but you also appreciate guidance. While you've seen many floor plans, none seem just right. Whether it's adjusting rooms, choosing finishes, or tweaking designs, you want a say. Generation Homes Northwest offers a plethora of home plans, and our design team is eager to tailor them to your needs. <a href="https://generationhomesnw.com/plans/" target="_new">Explore our plans here</a>.</p>
        <p>Unsure about this fit? Delve into the other home options below, reach out at 360-355-3363. Your satisfaction is our priority!</p>

        <img src="images/Generation-Homes-NW-Custom-Home.PNG" alt="Custom Homes">
        <h3>Custom Homes</h3>
        <p>Your dream home is unique, just like you. Whether you have a precise vision or simply know that standard plans won't do, Generation Homes Northwest is your partner in crafting that dream. With over 50 years of combined experience, we're as passionate about building homes as you are about living in them. <a href="https://generationhomesnw.com/custom-homes/">View our custom projects here</a> and let's embark on this journey together.</p>
        <p>Questions or second thoughts? Discover the other home styles below or give us a call at 360-355-3363. We're always eager to help!</p>

        <img src="images/Generation-Homes-NW-Quick-Move-In-Home.PNG" alt="Quick Move-In Homes">
        <h3>Quick Move-In Homes</h3>
        <p>You value efficiency and trust. You're not overly concerned with the minutiae of home design, focusing instead on other passions or simply enjoying a hassle-free life. Trust Generation Homes Northwest to provide you with a beautiful, ready-to-move-in home. <a href="https://generationhomesnw.com/plans/quick-move-homes/" target="_new">Browse our current selection here</a>.</p>
        <p>Still have questions or concerns? Explore the other home types below, call us at 360-355-3363. We're here to assist!</p>
    </div>
`;

const customHomesResult = `
    <div class="result">
        <img src="images/Generation-Homes-NW-Custom-Home.PNG" alt="Custom Homes">
        <h3>Custom Homes</h3>
        <p>Your dream home is unique, just like you. Whether you have a precise vision or simply know that standard plans won't do, Generation Homes Northwest is your partner in crafting that dream. With over 50 years of combined experience, we're as passionate about building homes as you are about living in them. <a href="https://generationhomesnw.com/custom-homes/">View our custom projects here</a> and let's embark on this journey together.</p>
        <p>Questions or second thoughts? Discover the other home styles below or give us a call at 360-355-3363. We're always eager to help!</p>
    
        <img src="images/Generation-Homes-NW-BOYL.PNG" alt="On Your Lot Homes">
        <h3>On Your Lot</h3>
        <p>Own a property in Vancouver, WA, or Clark County, Washington? Whether you're using one of our plans, modifying it, or starting from scratch, Generation Homes Northwest is thrilled to bring your vision to life on your lot. Even if you're still property hunting, our team can guide you in finding and evaluating the perfect spot. <a href="https://generationhomesnw.com/plans/homes-built-on-your-land/" target="_new">Learn more about building on your lot here</a>.</p>
        <p>Questions or second thoughts? Give us a call at 360-355-3363. We're always eager to help!</p>

        <img src="images/Generation-Homes-NW-Sem-Custom-Home.jpg" alt="Semi-Custom Homes">
        <h3>Semi-Custom Homes</h3>
        <p>You have a vision, but you also appreciate guidance. While you've seen many floor plans, none seem just right. Whether it's adjusting rooms, choosing finishes, or tweaking designs, you want a say. Generation Homes Northwest offers a plethora of home plans, and our design team is eager to tailor them to your needs. <a href="https://generationhomesnw.com/plans/" target="_new">Explore our plans here</a>.</p>
        <p>Unsure about this fit? Delve into the other home options below, reach out at 360-355-3363. Your satisfaction is our priority!</p>

        <img src="images/Generation-Homes-NW-Quick-Move-In-Home.PNG" alt="Quick Move-In Homes">
        <h3>Quick Move-In Homes</h3>
        <p>You value efficiency and trust. You're not overly concerned with the minutiae of home design, focusing instead on other passions or simply enjoying a hassle-free life. Trust Generation Homes Northwest to provide you with a beautiful, ready-to-move-in home. <a href="https://generationhomesnw.com/plans/quick-move-homes/" target="_new">Browse our current selection here</a>.</p>
        <p>Still have questions or concerns? Explore the other home types below, call us at 360-355-3363. We're here to assist!</p>
    </div>
`;

const questions = [
    { //question 1
        question: "How soon do you want to move?",
        answers: ["I need to move like yesterday",
         "I want to move in before Christmas", 
         "I am dreaming now but will move when I find exactly what I am looking for"],
        score: [0, 1, 2] 
    },
    {//question 2
        question: "What's your design influence?",
        answers: ["I don't really care and I want someone else to handle all the details", 
        "I have some ideas, but could use some help making sure they all work together", 
        "I should have been a designer and I want to choose every finish from house color to bathroom tile"],
        score: [0, 1, 2] 
    },
    {//question 3
        question: "What kind of home plan is appealing to you?",
        answers: ["I know how many rooms I need and leave the layout to the professionals", 
        "I have some specific needs but I’m not sure where to start", 
        "I am one of a kind and my home design needs to reflect that"],
        score: [0, 1, 2] 
    },
    {//question 4
        question: "How big is your dream yard?",
        answers: ["I don't care for yard work, give me something small", 
        "I need room to roam, but something I can maintain ", 
        "I’m starting a farm, I want something huge!"],
        score: [0, 1, 2] 
    },
    {//question 5
        question: "What style of community do you see yourself in?",
        answers: ["I enjoy having neighbors close by, and bring on the block parties!", 
        "I am flexible on where I live to get the home I want.", 
        "I don’t want to see my neighbors"],
        score: [0, 1, 2] 
    },
    {//question 6
        question: "What is your budget like?",
        answers: ["I have no budget for my dream home.", "I’ve worked really hard for this home and I know what I want but I have a budget", 
        "Have you seen this economy? Lets keep costs down"],
        score: [2, 1, 0] 
    },
    {//question 7
        question: "How do you feel about an HOA?",
        answers: ["I would never move into an HOA", 
        "I’d be curious to see what an HOA can do for me", 
        "I LOVE how nice HOA communities look!"],
        score: [2, 1, 0] 
    },
    {//question 8
        question: "How involved would you like to be in building your home?",
        answers: ["I’ll oversee every detail!", 
        "I want to stay informed but leave the decisions to the expert", 
        "Please don't bore me with this."],
        score: [2, 1, 0] 
    }
    
];

function renderQuestion() {
    const question = questions[currentQuestionIndex];
    let html = `<h2>${question.question}</h2>`;
    
    question.answers.forEach((answer, index) => {
        const isChecked = userSelections[currentQuestionIndex] === index ? "checked" : ""; // Check if the user has made a selection
        html += `<div class="radio-option">`; 
        html += `<input type="radio" name="answer" value="${index}" id="answer${index}" ${isChecked}>`;
        html += `<label for="answer${index}">${answer}</label>`;
        html += `</div>`; 
    });
    
    html += `<div class="button-container">`; //start button container
    if (currentQuestionIndex > 0) {
        html += '<button onclick="previousQuestion()">Previous</button>';
    }
    html += `<button onclick="selectAnswer()">Next</button>`;
    
    html += `</div>`; // End button container
    
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
    
    // Store the user's selection
    userSelections[currentQuestionIndex] = answerIndex;

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
    // Get user input
    const email = document.getElementById('email').value;
    const userName = document.getElementById('name').value; // Declare 'userName' here

    // Check if required fields are filled
    if (!email || !userName) {
        alert("Please provide your name and email.");
        return;
    }

    // Calculate total score and determine result
    const totalScore = scores.map((answerIndex, questionIndex) => questions[questionIndex].score[answerIndex]).reduce((a, b) => a + b, 0);
    let result = "Unknown"; // Default result

    if (totalScore <= 4) {
        result = quickMoveInHomesResult;
    } else if (totalScore <= 8) {
        result = semiCustomHomesResult;
    } else if (totalScore <= 12) {
        result = customHomesResult;
    } else {
        result = buildOnYourLotResult;
    };

     // Hide the intro paragraph, name/email form, and quiz container
     document.querySelector('.intro').style.display = 'none';
     document.getElementById('user-info').style.display = 'none';
     document.getElementById('quiz-container').style.display = 'none';
 
     // Display the result
     document.getElementById('result-text').innerHTML = `Hello ${userName}, your result is: ${result}`;
     document.getElementById('result-container').style.display = 'block';

    // Prepare data to send to the server
    const data = {
        email: email,
        name: userName, // Use 'userName' here
        result: result
    };

    // Send data to the server via fetch
    fetch('/.netlify/functions/addToMailchimp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}


// Start the quiz
renderQuestion();
