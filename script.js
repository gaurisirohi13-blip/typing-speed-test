let startTime;
let timerInterval;
let selectedTime;


   let sentences = [
    "JavaScript is a powerful programming language used for web development and building interactive websites with dynamic content",
    "Coding improves problem solving skills and helps you develop logical thinking which is very important for software development",
    "Practice makes a programmer perfect and consistency is the key to mastering any programming language and building strong concepts",
    "Frontend development involves HTML CSS and JavaScript to create visually appealing and user friendly interfaces for websites",
    "Data structures and algorithms are essential for writing efficient code and performing well in technical interviews and competitive programming",
    "Software development requires patience dedication and continuous learning to stay updated with new technologies and frameworks",
    "Web developers use modern tools and libraries to build fast responsive and scalable applications for real world users",
    "Debugging is an important skill that helps programmers identify and fix errors in their code efficiently and effectively"
];


function startTest() {
    selectedTime = parseInt(document.getElementById("timeSelect").value);

    let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById("sentence").innerText = randomSentence;

    let inputBox = document.getElementById("input");
    inputBox.disabled = false;
    inputBox.value = "";
    inputBox.focus();

    startTime = new Date().getTime();

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let currentTime = new Date().getTime();
    let seconds = Math.floor((currentTime - startTime) / 1000);

    let remainingTime = selectedTime - seconds;

    if (remainingTime < 0) remainingTime = 0;

    document.getElementById("timer").innerText =
        "Time Left: " + remainingTime + " sec";

    if (remainingTime === 0) {
        clearInterval(timerInterval);
        endTest();
    }
}

function endTest() {
    let typedText = document.getElementById("input").value.trim();
    let originalText = document.getElementById("sentence").innerText.trim();

    let words = typedText === "" ? 0 : typedText.split(" ").length;
    let speed = Math.round((words / selectedTime) * 60);

    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correctChars++;
        }
    }

    let accuracy = originalText.length === 0
        ? 0
        : Math.round((correctChars / originalText.length) * 100);

    // hide main UI
    document.querySelector(".container").style.display = "none";

    // show result page
    document.getElementById("finalResult").style.display = "block";

    // show result
    document.getElementById("finalText").innerText =
        "Speed: " + speed + " WPM | Accuracy: " + accuracy + "%";
}