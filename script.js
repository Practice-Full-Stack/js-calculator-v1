/******************************
LISTEN FOR KEYPRESSES
******************************/

// setup an 'event delegation' pattern to listen (since keys are children of ".keyboard")
const myCalculator = document.querySelector('.calculator'); // return the first elment in the doc with the class ".calculator"
const myKeyboard = document.querySelector('.keyboard'); // return the first elment in the doc with the class ".keyboard"

// do the listening
myKeyboard.addEventListener('click', localFunction => {
    if (localFunction.target.matches('button')) {
        alert("Your momma");
    }
}
)

// determine which key was pressed with the 'data-action' attribute
