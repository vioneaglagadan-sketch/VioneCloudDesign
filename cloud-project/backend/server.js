const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//
app.get("/", (req, res) => {
    res.send("Backend is working ☁️");
});

// 
app.get("/api/cloud-info", (req, res) => {
    res.json({
        project: "Cloud IT Dashboard",
        status: "Working",
        message: "Backend is now fixed"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});