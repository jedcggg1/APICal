const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const validateInputs = (num1, num2, res) => {
    if (isNaN(n1) || isNaN(n2)) {
        res.status(400).json({ error: "Invalid numbers provided." });
        return false;
    }
    if (num1 === undefined || num2 === undefined || num1 === '' || num2 === '') {
        res.status(400).json({ error: "Enter all information." });
        return false;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    return { n1, n2 };
};

app.get("/add", (req, res) => {
    const valid = validateInputs(req.query.num1, req.query.num2, res);
    if (!valid) return;
    res.json({ operation: "+", result: valid.n1 + valid.n2 });
});

app.get("/subtract", (req, res) => {
    const valid = validateInputs(req.query.num1, req.query.num2, res);
    if (!valid) return;
    res.json({ operation: "-", result: valid.n1 - valid.n2 });
});

app.get("/multiply", (req, res) => {
    const valid = validateInputs(req.query.num1, req.query.num2, res);
    if (!valid) return;
    res.json({ operation: "*", result: valid.n1 * valid.n2 });
});

app.get("/divide", (req, res) => {
    const valid = validateInputs(req.query.num1, req.query.num2, res);
    if (!valid) return;
    if (valid.n2 === 0) {
        return res.status(400).json({ error: "Cannot divide by 0." });
    }
    res.json({ operation: "/", result: valid.n1 / valid.n2 });
});

app.get("/modulo", (req, res) => {
    const valid = validateInputs(req.query.num1, req.query.num2, res);
    if (!valid) return;
    if (valid.n2 === 0) {
        return res.status(400).json({ error: "Cannot modulo by 0." });
    }
    res.json({ operation: "%", result: valid.n1 % valid.n2 });
});

app.listen(3000, () => {
    console.log("Server starts successfully on port 3000");
});