let string = "";
const inputBox = document.querySelector('input');
const buttons = document.querySelectorAll(".button");

// Click event for all buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        } 
        else if (value === "C") {
            string = "";
            inputBox.value = "";
        } 
        else if (value === "⌫") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } 
        else if (value === "+/-") {
            if (string) {
                string = (parseFloat(string) * -1).toString();
                inputBox.value = string;
            }
        } 
        else {
            string += value;
            inputBox.value = string;
        }
    });
});

// ✅ Keyboard Input Support
document.addEventListener('keydown', (e) => {
    const allowedKeys = /[0-9+\-*/.%]/;
    if (allowedKeys.test(e.key)) {
        string += e.key;
        inputBox.value = string;
    } 
    else if (e.key === "Enter") {
        try {
            string = eval(string);
            inputBox.value = string;
        } catch {
            inputBox.value = "Error";
            string = "";
        }
    } 
    else if (e.key === "Backspace") {
        string = string.slice(0, -1);
        inputBox.value = string;
    } 
    else if (e.key.toLowerCase() === "c") {
        string = "";
        inputBox.value = "";
    }
});
