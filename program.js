// Defines Timer Properties
const startingMinutes = 108;
let time = startingMinutes * 60;

// Defines where the timer will be displayed
const hundreds = document.getElementById('hundreds');
const tens = document.getElementById('tens');
const ones = document.getElementById('ones');
const tenths = document.getElementById('tenths');
const onths = document.getElementById('onths');


//Input Properties
function updateInput() {
    if (time < 1200) {
        input.maxLength = 30;
    } else {
        input.maxLength = 0;
    }
}

//Defines the Input and System fields
let enter = document.getElementById('input');
let error = document.getElementById('system');

//Defines Date 
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();

//  This is the function that makes the timer decrease and delcares events at certain times
function updateCountdown() {
    updateInput();
    const minutes = Math.floor(time / 60);
    const hundredsDigit = Math.floor(minutes / 100);
    const tensDigit = Math.floor((minutes / 10) % 10);
    const onesDigit = Math.floor(minutes % 10);

    hundreds.innerHTML = hundredsDigit;
    tens.innerHTML = tensDigit;
    ones.innerHTML = onesDigit;

    const seconds = time % 60;
    const tenthsDigit = Math.floor((seconds / 10) % 10);
    const onthsDigit = seconds % 10;

    tenths.innerHTML = tenthsDigit;
    onths.innerHTML = onthsDigit;

    time--;

    if (time === -2) {
        randomNumberInterval = setInterval(displayRandomNumber, 10);
        setTimeout(function () {
            clearInterval(randomNumberInterval);
        }, 6000);
        shuffle.play();
    } else if (time < -2) {
        time = -2;
        hundreds.classList.add("minzero");
        tens.classList.add("minzero");
        ones.classList.add("minzero");
        tenths.classList.add("seczero");
        onths.classList.add("seczero");
        hundreds.innerHTML = '𓋴';
        tens.innerHTML = '𓏲';
        ones.innerHTML = '𓊽';
        tenths.innerHTML = '𓄿';
        onths.innerHTML = '𓌅';
    } else if (time > -2) {
        hundreds.classList.remove("minzero");
        tens.classList.remove("minzero");
        ones.classList.remove("minzero");
        tenths.classList.remove("seczero");
        onths.classList.remove("seczero");
    }
}

setInterval(updateCountdown, 1000);


//Random number Display
function displayRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);
    hundreds.innerHTML = randomNumber;
    tens.innerHTML = randomNumber;
    ones.innerHTML = randomNumber;
    tenths.innerHTML = randomNumber;
    onths.innerHTML = randomNumber;

}


// Adds the system failure message if the button is not reset
function addSystemFailure() {
    if (time < 0) {
        system.innerHTML += " SYSTEM FAILURE, ";
    }
}

setInterval(addSystemFailure, 200);


// Adds the syste failure sound effect if the timer hits 0, pauses if timer is reset
function systemFailure() {
    if (time < 0) {
        failure.play();
    } else if (time > 0) {
        failure.pause();
    }
}

setInterval(systemFailure, 1000);


//The alarm will sound when the timer has a minute left
function alarm() {
    if (time < 60 && time > 10) {
        siren.play();
    }
}
setInterval(alarm, 2000);


//The alarm will increase in intensity when the timer is under 10 seconds
function underTen() {
    if (time < 10 && time > 0) {
        siren.play();
    }
}
setInterval(underTen, 1190);


//The soft warning will play every other second if the timer is below 1200 seconds (20mins)
function scan() {
    if (time < 1200 && time > 60) {
        shop.play();
    } else {
        shop.pause();
    }
}
setInterval(scan, 2000);


// Restarting Timer 

function resetTimer() {
    time = startingMinutes * 60;
}

document.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        if (input.value == '4815162342') {
            partnerChange();
            shuffle.play();
            randomNumberInterval = setInterval(displayRandomNumber, 10);
            setTimeout(function () {
                clearInterval(randomNumberInterval);
                resetTimer();
            }, 850);

            system.innerHTML += ` Accepted at ${month}/${day}/${year}/${hour}:${min}:${sec}, `;
        }
        else if (input.value === "") {
            system.innerHTML += ""
        }
        else {
            system.innerHTML += ' INCORRECT CODE, ';
            wrong.play();
        }
        input.value = "";
    }
});



// Sound Effects Declaration
let wrong = new Audio("audio/wrong.mp3")

let failure = new Audio("audio/failure.mp3")

let siren = new Audio("audio/siren.mp3")

let shop = new Audio("audio/shop.mp3")

let shuffle = new Audio("audio/shuffle.mp3");

let type = new Audio("audio/execute.mp3");


//Anytime a key is pressed except enter, the key sound will play
document.addEventListener("keydown", function (event) {
    if (event.code !== 'Enter') {
        type.play();
    }
});


//        Partner Code        //


//Defines the Two Partner Sections
let personOne = document.getElementById('personOne');
let personTwo = document.getElementById('personTwo');


//This is where the people are stored

let people = ['John', 'Greg', 'Jake', 'Derek', 'Mitch', 'Craig', 'Kevin', 'James', 'Guav'];


let partnerChange = () => {
    const randomIndexOne = Math.floor(Math.random() * people.length);
    const randomPersonOne = people[randomIndexOne];

    //   people.splice(randomIndexOne, 1);

    const randomIndexTwo = Math.floor(Math.random() * people.length);
    const randomPersonTwo = people[randomIndexTwo];


    //   people.splice(randomIndexTwo, 1);


    personOne.textContent = randomPersonOne;
    personTwo.textContent = randomPersonTwo;

};

window.onload = partnerChange();

