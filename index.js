const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", (req, res) => {
  console.log(req.body)
  const { num1, num2 } = req.body;
  let result = +num1 + +num2;
  res.send(`The result is ${result}`)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
