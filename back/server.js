console.log("About to start a server...");

const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req: ", req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
