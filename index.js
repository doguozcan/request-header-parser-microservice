const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: req.headers["x-forwarded-for"],
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

app.listen(port, () => console.log(`Your app is listening on ${port}`));
