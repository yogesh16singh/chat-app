const express = require("express");
const app = express();
const port = process.env.PORT || 8081
app.get("/", (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log("server is running");
});