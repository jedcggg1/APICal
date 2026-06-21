document.getElementById('calculateBTN').addEventListener('click', async () => {
    const num1 = document.getElementById('NBX').value;
    const num2 = document.getElementById('NBY').value;
    const operator = document.getElementById('operator').value;
    const resultSpan = document.getElementById('result');

    resultSpan.innerText = "กำลังคำนวณ...";
    resultSpan.style.color = "inherit";

    try {
        const encodedOperator = encodeURIComponent(operator);
        
        const response = await fetch(`http://localhost:3000/calculate?num1=${num1}&num2=${num2}&operator=${encodedOperator}`);
        const data = await response.json();

        if (response.ok) {
            resultSpan.innerText = data.result;
            resultSpan.style.color = "#4CAF50"; 
        } else {
            resultSpan.innerText = data.error;
            resultSpan.style.color = "#F44336";
        }
    } catch (error) {
        resultSpan.innerText = "ไม่สามารถเชื่อมต่อ Server ได้";
        resultSpan.style.color = "#F44336";
    }
});