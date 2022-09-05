const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });
//app.use(express.static('../Dylan-website'))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});