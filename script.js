const keyTextArray = ["AC", "←", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1" ,"2", "3", "+", "0", ".", "="];
const keyIdArray   = ["ac", "backspace", "percent", "slash", "seven", "eight", "nine", "asterisk", "four", "five", "six", "minus", "one" ,"two", "three", "plus", "zero", "period", "equal"];
const calculator   = document.querySelector("#calculator");
const screen       = document.querySelector("#screen");
const buttonPanel  = document.querySelector("#button-panel");

let num1 = "";
let num2 = "";
let oprt = "";

function operate(n1, n2, op)
{
    let res = 0;

    switch(op)
    {
        case "+":
            res = Number(n1) + Number(n2);
            break;
        case "-":
            res = Number(n1) - Number(n2);
            break;
        case "*":
            res = Number(n1) * Number(n2);
            break;
        case "/":
            res = Number(n1) / Number(n2);
            break;
        default:
            alert("Impossible!!");
            return "";         
    }

    if (isNaN(res))
    {
        alert("Very Sus...");
        return "";
    }

    return String((Math.round(res * 1000000)) / 1000000)
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

    if (targ.id == "ac")
    {
        num1 = "";
        num2 = "";
        oprt = "";
        screen.textContent = "";
        return;
    }

    if (isNum)
    {
        if (!oprt)
        {
            num1 += targ.textContent;
            screen.textContent = num1;
        }          
        else 
        {
            num2 += targ.textContent;
            screen.textContent = num2;
        }

        return;    
    }

    if (targ.id == "period")
    {
        if (!oprt)
        {
            if (!num1.includes("."))
            {
                num1 += targ.textContent;
                screen.textContent = num1;
            }
        }          
        else 
        {
            if (!num2.includes("."))
            {
                num2 += targ.textContent;
                screen.textContent = num2;
            }
        }

        return;   
    }

    if (targ.id == "backspace")
        {
            if (!oprt)
            {
                if (num1)
                {
                    num1 = num1.slice(0, -1);
                    screen.textContent = num1;
                }
            }          
            else 
            {
                if (num2)
                {
                    num2 = num2.slice(0, -1);
                    screen.textContent = num2;
                }
            }
    
            return;   
        }

    if (targ.id == "equal")
    {
        if ((num1 && num2 && oprt))
        {
            num1 = operate(num1, num2, oprt);
            num2 = "";
            oprt = "";
            screen.textContent = num1;
        }

        return;
    }
 
    if (!oprt)
    {
        oprt = targ.textContent;
        screen.textContent = "";
        return;
    }

    if (!num1 || !num2)
        return;

    if ((num1 && num2 && oprt))
    {
        num1 = operate(num1, num2, oprt);
        num2 = "";
        oprt = targ.textContent;
        screen.textContent = num1;
        return;
    }

    return;
});
