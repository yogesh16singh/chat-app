const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "hello"
    })
})

app.listen(8081, () => {
    console.log("server is running");
})