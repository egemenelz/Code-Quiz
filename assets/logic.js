//Quiz Cards
var startCard = document.getElementById('start-card');
var firstQuestion = document.getElementById('first-question');
var secondQuestion = document.getElementById('second-question');
var thirdQuestion = document.getElementById('third-question');
var fourthQuestion = document.getElementById('fourth-question');
var fifthQuestion = document.getElementById('fifth-question');
var resultCard = document.getElementById('result-card');

//Card Button
var startButton = document.getElementById('start-button');
var firstButton = document.getElementById('first-button');
var secondButton = document.getElementById('second-button');
var thirdButton = document.getElementById('third-button');
var fourthButton = document.getElementById('fourth-button');
var fifthButton = document.getElementById('fifth-button');


//Hide or show question cards
startCard.hidden = false;
firstQuestion.hidden = true;
secondQuestion.hidden = true;
thirdQuestion.hidden = true;
fourthQuestion.hidden = true;
fifthQuestion.hidden = true;
resultCard.hidden = true;

//Score
var finalResult = document.getElementById('final-result');
let scoreValue = 0;

//Timer
var timer = document.getElementById('timer');
var secLeft = 75;

//Button Interactivity
startButton.addEventListener('click', function(){
    firstQuestion.hidden = false;
    startCard.hidden = true;
    var timerInterval = setInterval(function(){
        secLeft--;
        timer.textContent = secLeft;

        if(secLeft === 0 || !resultCard.hidden){
            clearInterval(timerInterval);
            startCard.hidden = true;
            firstQuestion.hidden = true;
            secondQuestion.hidden = true;
            thirdQuestion.hidden = true;
            fourthQuestion.hidden = true;
            fifthQuestion.hidden = true;
            resultCard.hidden = false;
            finalResult.textContent = scoreValue.toString();
        }
       
    }, 1000);

});

firstButton.addEventListener('click', function(){
    secondQuestion.hidden = false;
    firstQuestion.hidden = true;
    var firstOpt = document.querySelectorAll('#first-question input[name="answer"]');
    var answerOne;
    for(var opt of firstOpt){
        if(opt.checked){
            answerOne = opt.value;
        };
    };
    switch(answerOne){
        case 'true':
            document.getElementById('result-first').textContent = 'Previous Question Correct Answered'
            scoreValue+=10;
            break;
        case 'false':
            
            document.getElementById('result-first').textContent = 'Previous Question Wrong Answered'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

secondButton.addEventListener('click', function(){
    thirdQuestion.hidden = false;
    secondQuestion.hidden = true;
    var secondOpt = document.querySelectorAll('#second-question input[name="answer"]');
    var answerTwo;
    for(var opt of secondOpt){
        if(opt.checked){
            answerTwo = opt.value;
        };
    };
    switch(answerTwo){
        case 'true':
            document.getElementById('result-second').textContent = 'Previous Question Correct Answered'
            scoreValue+=10;
            break;
        case 'false':
            document.getElementById('result-second').textContent = 'Previous Question Wrong Answered'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

thirdButton.addEventListener('click', function(){
    fourthQuestion.hidden = false;
    thirdQuestion.hidden = true;
    var thirdOpt = document.querySelectorAll('#third-question input[name="answer"]');
    var answerThree;
    for(var opt of thirdOpt){
        if(opt.checked){
            answerThree = opt.value;
        };
    };
    switch(answerThree){
        case 'true':
            document.getElementById('result-third').textContent = 'Previous Question Correct Answered'
            scoreValue+=10;
            break;
        case 'false':
            document.getElementById('result-third').textContent = 'Previous Question Wrong Answered'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

fourthButton.addEventListener('click', function(){
    fifthQuestion.hidden = false;
    fourthQuestion.hidden = true;
    var fourthOpt = document.querySelectorAll('#fourth-question input[name="answer"]');
    var answerFour;
    for(var opt of fourthOpt){
        if(opt.checked){
            answerFour = opt.value;
        };
    };
    switch(answerFour){
        case 'true':
            document.getElementById('result-fourth').textContent = 'Previous Question Correct Answered'
            scoreValue+=10;
            break;
        case 'false':
            document.getElementById('result-fourth').textContent = 'Previous Question Wrong Answered'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
});

fifthButton.addEventListener('click', function(){
    resultCard.hidden = false;
    fifthQuestion.hidden = true;
    var fifthOpt = document.querySelectorAll('#fifth-question input[name="answer"]');
    var answerFive;
    for(var opt of fifthOpt){
        if(opt.checked){
            answerFive = opt.value;
        };
    };
    switch(answerFive){
        case 'true':
            document.getElementById('result-five').textContent = 'Previous Question Correct Answered'
            scoreValue+=10;
            break;
        case 'false':
            document.getElementById('result-five').textContent = 'Previous Question Wrong Answered'
            secLeft-=5;
            if(scoreValue > 10){
                scoreValue-=10;
            };
            break;
    };
    finalResult.textContent = scoreValue.toString();
});


function makeEntry(u_initials,u_highscore){
    var entry = {
        initials: u_initials,
        highscore: u_highscore
    };
    
    return entry;
}


var saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', function(){
    var userInitials = document.getElementById('user-initials').value;
    if(!userInitials){
        alert('Please enter your initials');
    } else {
        var newEntry = makeEntry(userInitials,scoreValue);
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
    window.location.assign('result.html'); 
})