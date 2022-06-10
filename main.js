function getPin() {
    const randomNum = Math.random() * 10000;
    const randomNumber = (randomNum + '').split('.')[0];
    if (randomNumber.length == 4) {
        return randomNumber;
    }
    else {
        getPin();
    }
}

function generatePin() {
    const pinInput = document.getElementById("pin-input");
    pinInput.value = getPin();
}

document.getElementById("digit-container").addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === "C") {
            const typedPin = document.getElementById("typed-pin").value = "";
        }
    }
    else {
        const typedPin = document.getElementById("typed-pin");
        typedPin.value = typedPin.value + digit;
    }
});

function pinMatching() {
    const pinInput = document.getElementById("pin-input").value;
    const typedPin = document.getElementById("typed-pin").value;

    if (pinInput === typedPin) {
        matchingMsg("block", "none");
    }
    else {
        matchingMsg("none", "block");
    }
}

function matchingMsg(correctStatus, incorrectStatus) {
    const correctMsg = document.getElementById("correct-msg");
    correctMsg.style.display = correctStatus;
    const incorrectMsg = document.getElementById("incorrect-msg");
    incorrectMsg.style.display = incorrectStatus;
}