let startTime;
let timerInterval;

let sentences = [
    "JavaScript is fun to learn",
    "Coding improves problem solving skills",
    "Practice makes a programmer perfect"
];

function startTest() {
    let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

    document.getElementById("sentence").innerText = randomSentence;

    let inputBox = document.getElementById("input");
    inputBox.disabled = false;
    inputBox.value = "";
    inputBox.focus();

    startTime = new Date().getTime();

    document.getElementById("result").innerText = "";

    // Start timer
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let currentTime = new Date().getTime();
    let seconds = Math.floor((currentTime - startTime) / 1000);

    document.getElementById("timer").innerText =
        "Time: " + seconds + " sec";
}

document.getElementById("input").addEventListener("input", function () {
    let typedText = this.value;
    let originalText = document.getElementById("sentence").innerText;

    if (typedText.length > 0) {
        let currentTime = new Date().getTime();
        let timeTaken = (currentTime - startTime) / 1000;

        let words = typedText.trim().split(" ").length;
        let speed = Math.round((words / timeTaken) * 60);

        document.getElementById("result").innerText =
            "Typing Speed: " + speed + " WPM";
    }

    if (typedText === originalText) {
        clearInterval(timerInterval); // stop timer
        document.getElementById("result").innerText += " ✅ Completed!";
    }
});