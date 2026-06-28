document.getElementById('calculateBTN').addEventListener('click', async () => {
    const num1 = document.getElementById('NBX').value;
    const num2 = document.getElementById('NBY').value;
    const operator = document.getElementById('operator').value;
    const resultSpan = document.getElementById('result');

    resultSpan.innerText = "Calculating...";
    resultSpan.style.color = "inherit";

    let endpoint = "";
    switch (operator) {
        case "+": endpoint = "add"; break;
        case "-": endpoint = "subtract"; break;
        case "*": endpoint = "multiply"; break;
        case "/": endpoint = "divide"; break;
        case "%": endpoint = "modulo"; break;
    }

    try {
        const response = await fetch(`http://localhost:3000/${endpoint}?num1=${num1}&num2=${num2}`);
        const data = await response.json();

        if (response.ok) {
            resultSpan.innerText = data.result;
            resultSpan.style.color = "#4CAF50"; 
        } else {
            resultSpan.innerText = data.error;
            resultSpan.style.color = "#F44336";
        }
    } catch (error) {
        resultSpan.innerText = "Cannot connect to the server.";
        resultSpan.style.color = "#F44336";
    }
});