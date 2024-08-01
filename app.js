// Creating our server

import express from "express";
const app = express();

const port = 2222;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// get post put patch delete
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

// http ???

app.post("/about", (req, res) => {
    res.send("About me");
  });
  