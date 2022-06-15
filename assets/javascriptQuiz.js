/**
 * Question Cards and Card Buttons
 */
var start = document.getElementById('start-card');
var startButton = document.getElementById('start-button');
var saveButton = document.getElementById('save-button');
start.hidden = false;

var result = document.getElementById('result-card');
result.hidden = true;


var firstQ = document.getElementById('firstQ');
var firstB = document.getElementById('firstB');
firstQ.hidden = true;

var secondQ = document.getElementById('secondQ');
var secondB = document.getElementById('secondB');
secondQ.hidden = true;

var thirdQ = document.getElementById('thirdQ');
var thirdB = document.getElementById('thirdB');
thirdQ.hidden = true;

var fourthQ = document.getElementById('fourthQ');
var fourthB = document.getElementById('fourthB');
fourthQ.hidden = true;

var fifthQ = document.getElementById('fifthQ');
var fifthB = document.getElementById('fifthB');
fifthQ.hidden = true;

var sixthQ = document.getElementById('sixthQ');
var sixthB = document.getElementById('sixthB');
sixthQ.hidden = true;

var seventhQ = document.getElementById('seventhQ');
var seventhB = document.getElementById('seventhB');
seventhQ.hidden = true;

var eighthQ = document.getElementById('eighthQ');
var eighthB = document.getElementById('eighthB');
eighthQ.hidden = true;

var ninthQ = document.getElementById('ninthQ');
var ninthB = document.getElementById('ninthB');
ninthQ.hidden = true;

var tenthQ = document.getElementById('tenthQ');
var tenthB = document.getElementById('tenthB');
tenthQ.hidden = true;


//Score
var finalResult = document.getElementById('final-result');
let score = 0;

//Timer
var timer = document.getElementById('timer');
var secLeft = 75;

//Button Interactivity
startButton.addEventListener('click', function () {
    firstQ.hidden = false;
    start.hidden = true;
    var timerInterval = setInterval(function () {
        secLeft--;
        timer.textContent = secLeft;

        if (secLeft === 0 || !result.hidden) {
            clearInterval(timerInterval);
            start.hidden = true;
            firstQ.hidden = true;
            secondQ.hidden = true;
            thirdQ.hidden = true;
            fourthQ.hidden = true;
            fifthQ.hidden = true;
            sixthQ.hidden = true;
            seventhQ.hidden = true;
            eighthQ.hidden = true;
            ninthQ.hidden = true;
            tenthQ.hidden = true;
            result.hidden = false;
            finalResult.textContent = score.toString();
        }

    }, 1000);

});

firstB.addEventListener('click', function () {
    secondQ.hidden = false;
    firstQ.hidden = true;
    var output = document.querySelectorAll('#first-question input[name="answer"]');
    var answer;
    for (var opt of output) {
        if (opt.checked) {
            answer = opt.value;
        };
    };

    if (answer === 'true') {
        document.getElementById('resultOne').textContent = 'Correct Answered!'
        score += 10;
    } else if (answer === 'false') {
        document.getElementById('resultOne').textContent = 'Wrong Answered!'
        secLeft -= 5;
        if (score > 10) {
            score -= 10;
        };
    }
});

secondButton.addEventListener('click', function () {
    thirdQ.hidden = false;
    secondQ.hidden = true;
    var output = document.querySelectorAll('#secondQ input[name="answer"]');
    var answer;
    for (var opt of output) {
        if (opt.checked) {
            answer = opt.value;
        };
    };
    if (answer === 'true') {
        document.getElementById('resultTwo').textContent = 'Correct Answered!'
        score += 10;
    } else if (answer === 'false') {
        document.getElementById('resultTwo').textContent = 'Wrong Answered!'
        secLeft -= 5;
        if (score > 10) {
            score -= 10;
        };
    }
});

thirdButton.addEventListener('click', function () {
    fourthQ.hidden = false;
    thirdQ.hidden = true;
    var output = document.querySelectorAll('#thirdQ input[name="answer"]');
    var answer;
    for (var opt of output) {
        if (opt.checked) {
            answer = opt.value;
        };
    };
    if (answer === 'true') {
        document.getElementById('resultThree').textContent = 'Correct Answered!'
        score += 10;
    } else if (answer === 'false') {
        document.getElementById('resultThree').textContent = 'Wrong Answered!'
        secLeft -= 5;
        if (score > 10) {
            score -= 10;
        };
    }
});

fourthButton.addEventListener('click', function () {
    fifthQ.hidden = false;
    fourthQ.hidden = true;
    var fourthOpt = document.querySelectorAll('#fourth-question input[name="answer"]');
    var answerFour;
    for (var opt of fourthOpt) {
        if (opt.checked) {
            answerFour = opt.value;
        };
    };
    switch (answerFour) {
        case 'right':
            document.getElementById('result-four').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-four').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

fifthButton.addEventListener('click', function () {
    sixthQ.hidden = false;
    fifthQ.hidden = true;
    var fifthOpt = document.querySelectorAll('#fifth-question input[name="answer"]');
    var answerFive;
    for (var opt of fifthOpt) {
        if (opt.checked) {
            answerFive = opt.value;
        };
    };
    switch (answerFive) {
        case 'right':
            document.getElementById('result-five').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-five').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

sixthButton.addEventListener('click', function () {
    seventhQ.hidden = false;
    sixthQ.hidden = true;
    var sixthOpt = document.querySelectorAll('#sixth-question input[name="answer"]');
    var answerSix;
    for (var opt of sixthOpt) {
        if (opt.checked) {
            answerSix = opt.value;
        };
    };
    switch (answerSix) {
        case 'right':
            document.getElementById('result-six').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-six').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

seventhButton.addEventListener('click', function () {
    eighthQ.hidden = false;
    seventhQ.hidden = true;
    var seventhOpt = document.querySelectorAll('#seventh-question input[name="answer"]');
    var answerSeven;
    for (var opt of seventhOpt) {
        if (opt.checked) {
            answerSeven = opt.value;
        };
    };
    switch (answerSeven) {
        case 'right':
            document.getElementById('result-seven').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-seven').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

eighthButton.addEventListener('click', function () {
    ninthQ.hidden = false;
    eighthQ.hidden = true;
    var eighthOpt = document.querySelectorAll('#eighth-question input[name="answer"]');
    var answerEight;
    for (var opt of eighthOpt) {
        if (opt.checked) {
            answerEight = opt.value;
        };
    };
    switch (answerEight) {
        case 'right':
            document.getElementById('result-eight').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-eight').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

ninthButton.addEventListener('click', function () {
    tenthQ.hidden = false;
    ninthQ.hidden = true;
    var ninthOpt = document.querySelectorAll('#ninth-question input[name="answer"]');
    var answerNine;
    for (var opt of ninthOpt) {
        if (opt.checked) {
            answerNine = opt.value;
        };
    };
    switch (answerNine) {
        case 'right':
            document.getElementById('result-nine').textContent = 'Previous Answer was Right!'
            score += 10;
            break;
        case 'wrong':
            document.getElementById('result-nine').textContent = 'Previous Answer was Wrong!'
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
});

tenthButton.addEventListener('click', function () {
    result.hidden = false;
    tenthQ.hidden = true;
    var tenthOpt = document.querySelectorAll('#tenth-question input[name="answer"]');
    var answerTen;
    for (var opt of tenthOpt) {
        if (opt.checked) {
            answerTen = opt.value;
        };
    };
    switch (answerTen) {
        case 'right':
            score += 10;
            break;
        case 'wrong':
            secLeft -= 5;
            if (score > 10) {
                score -= 10;
            };
            break;
    };
    finalResult.textContent = score.toString();
});


function makeEntry(u_initials, u_highscore) {
    var entry = {
        initials: u_initials,
        highscore: u_highscore
    };

    return entry;
}

saveButton.addEventListener('click', function () {
    var userInitials = document.getElementById('user-initials').value;
    if (!userInitials) {
        alert('Please enter your initials');
    } else {
        var newEntry = makeEntry(userInitials, score);
        if (localStorage.getItem('highscores')) {
            var updatedHighScore = JSON.parse(localStorage.getItem('highscores'));
            updatedHighScore.push(newEntry)
            localStorage.setItem('highscores', JSON.stringify(updatedHighScore));
        } else {
            var highScores = [];
            highScores.push(newEntry);
            localStorage.setItem('highscores', JSON.stringify(highScores));
        };
    };
    window.location.assign('score.html');
})