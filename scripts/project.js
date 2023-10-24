// Define variables to access HTML elements
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options');
const nextButton = document.getElementById('next-button');

// Initialize variables for tracking quiz progress
let currentQuestionIndex = 0;
let score = 0;
let questions;

// Function to display a question
function displayQuestion(question) {
    questionText.textContent = question.question;
    optionsList.innerHTML = '';
    question.options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => checkAnswer(option, question.correctAnswer));
        optionsList.appendChild(li);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    questionText.textContent = `Quiz completed! Your score: ${score} out of ${questions.length}`;
    optionsList.innerHTML = '';
    nextButton.style.display = 'none';
}

// Function to load questions from the external JSON file
async function loadQuestions() {
        const response = await fetch('scripts/questions.json');
        questions = await response.json();
        displayQuestion(questions[currentQuestionIndex]);
    }

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    displayQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none';
});

// Load questions when the page loads
loadQuestions();
