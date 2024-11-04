const keyTextArray = ["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1" ,"2", "3", "+", "0", ".", "="];
const keyIdArray   = ["ac", "plus-minus", "percent", "slash", "seven", "eight", "nine", "asterisk", "four", "five", "six", "minus", "one" ,"two", "three", "plus", "zero", "period", "equal"];
const calculator   = document.querySelector("#calculator");
const screen       = document.querySelector("#screen");
const buttonPanel  = document.querySelector("#button-panel");

let num1 = "";
let num2 = "";
let oprt = "";

function operate(n1, n2, op)
{
    switch(op)
    {
        case "+":
            return Number(n1) + Number(n2);
        case "-":
            return Number(n1) - Number(n2);
        case "*":
            return Number(n1) * Number(n2);
        case "/":
            return Number(n1) / Number(n2);
        default:
            return 0;
    }
}

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

buttonPanel.addEventListener('click', (e) => {
    
    const targ  = e.target;
    const isNum = targ.classList.contains("number-key");
    const isOp  = targ.classList.contains("operator-key")

    console.log(targ.id + " " + targ.classList);

    if (!isNum && !isOp) 
        return;

    if (isNum)
        if (oprt == "")
            num1 += targ.textContent;
        else 
            num2 += targ.textContent;

    if (isOp)
        if (targ.id == "equal")
        {
            screen.textContent = String(operate(num1, num2, oprt));
            num1 = "";
            num2 = "";
            oprt = "";
            return;
        }
        else if (targ.id == "ac")
        {
            num1 = "";
            num2 = "";
            oprt = "";
        }
        else
        {
            oprt += targ.textContent;
        }
        
    screen.textContent = num1 + oprt + num2;
});
