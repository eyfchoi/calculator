const calculator  = document.querySelector("#calculator");
const screen      = document.querySelector("#screen");
const buttonPanel = document.querySelector("#button-panel");

const keyTextArray = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1" ,"2", "3", "+", "0", ".", "="];
const keyIdArray   = ["ac", "plus-minus", "percent", "slash", "seven", "eight", "nine", "asterisk", "four", "five", "six", "minus", "one" ,"two", "three", "plus", "zero", "period", "equal"];

for (let i = 0; i < keyTextArray.length; i++)
{
    let button = document.createElement("button");
    button.textContent = keyTextArray[i];
    button.id = keyIdArray[i];
    button.classList.add("key");

    if (Number.isInteger(Number(keyTextArray[i])))
        button.classList.add("number-key");
    else
        button.classList.add("operator-key");

    buttonPanel.appendChild(button);   
}
