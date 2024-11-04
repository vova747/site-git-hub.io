const quizQuestions = [
    {
        question: "Хто є головним героєм 'Давньої казки'?",
        options: ["Поет", "Король", "Лицар", "Селянин"],
        correctAnswer: 0
    },
    {
        question: "Яку роль відіграє поет у творі?",
        options: ["Він є антагоністом", "Він є оповідачем", "Він є другорядним персонажем", "Він є головним героєм"],
        correctAnswer: 3
    },
    {
        question: "Яка основна тема 'Давньої казки'?",
        options: ["Кохання", "Війна", "Свобода і творчість", "Природа"],
        correctAnswer: 2
    },
    {
        question: "Що символізує арфа у творі?",
        options: ["Багатство", "Владу", "Мистецтво і творчість", "Кохання"],
        correctAnswer: 2
    },
    {
        question: "Як закінчується 'Давня казка'?",
        options: ["Поет стає королем", "Поет гине", "Поет одружується", "Поет перемагає ворогів"],
        correctAnswer: 1
    },
    {
        question: "Який жанр 'Давньої казки'?",
        options: ["Лірична поема", "Епічна поема", "Балада", "Сонет"],
        correctAnswer: 1
    },
    {
        question: "Яку роль відіграє принцеса у творі?",
        options: ["Вона є головною героїнею", "Вона є антагоністом", "Вона є каталізатором подій", "Вона є другорядним персонажем"],
        correctAnswer: 2
    },
    {
        question: "Яке значення має назва 'Давня казка'?",
        options: ["Це просто стара історія", "Це алегорія на сучасне суспільство", "Це легенда про минуле", "Це казка для дітей"],
        correctAnswer: 1
    }
];

function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('quiz-question');
        questionElement.innerHTML = `
            <h4>${index + 1}. ${q.question}</h4>
            <ul class="quiz-options">
                ${q.options.map((option, i) => `
                    <li class="quiz-option">
                        <input type="radio" id="q${index}-o${i}" name="q${index}" value="${i}">
                        <label for="q${index}-o${i}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.correctAnswer) {
            score++;
        }
    });
    const resultsElement = document.getElementById('quiz-results');
    resultsElement.innerHTML = `<h3>Ваш результат: ${score} з ${quizQuestions.length}</h3>`;
    resultsElement.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    document.getElementById('submit-quiz').addEventListener('click', submitQuiz);
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animations
const animatedElements = document.querySelectorAll('h2, h3, .theme-card');
animatedElements.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style.transform = 'scale(1.05)';
        el.style.transition = 'transform 0.3s ease';
    });
    el.addEventListener('mouseout', () => {
        el.style.transform = 'scale(1)';
    });
});