const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/calculate", (req, res) => {
    const { num1, num2, operator } = req.query;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        return res.status(400).json({ error: "Invalid numbers provided." });
    }

    if (num1 === undefined || num2 === undefined || operator === undefined || num1 === '' || num2 === '') {
        return res.status(400).json({ error: "Enter all information." });
    }

    let result;

    switch (operator) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "*": result = n1 * n2; break;
        case "/":
            if (n2 === 0) return res.status(400).json({ error: "Cannot divide by 0." });
            result = n1 / n2;
            break;
        case "%":
            if (n2 === 0) return res.status(400).json({ error: "Cannot modulo by 0." });
            result = n1 % n2; break;
        default: return res.status(400).json({ error: "Error" });
    }

    res.json({ operation: operator, result: result });
});

app.listen(3000, () => {
    console.log("Server starts successfully on port 3000");
});