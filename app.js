// Creating our server

import express from "express";
const app = express();

const port = 2222;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

// get post put patch delete
// app.get("/", (req, res) => {
//     res.send("Hello World!"); 
    
//   });

app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
});
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/aboutme', (req, res) => res.send('I love coding!'))
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'))

// http ???

app.post("/about", (req, res) => {
    res.send("About me");
  });
