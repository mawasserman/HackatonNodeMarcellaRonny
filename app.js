// Creating our server

import express from "express";
const app = express();

const port = 2222;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

// http ???