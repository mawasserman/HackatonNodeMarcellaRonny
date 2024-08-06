// Importing everything
import express from "express";
import knex from "knex";
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 2222;

// Connecting to the database
const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'password',
        database: 'HackatonMindPar'
    }
});


//terceiro membro do grupo
// Determine the current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware
pp.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Mindful Parenting');
});

// Example route to get all articles
app.get('/articles', async (req, res) => {
    const { title, content, image_url } = req.body;
    try {
        const articles = await db.select('*').from('articles');
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});

// Example route to add a new article
app.post('/articles', async (req, res) => {
    const { title, content } = req.body;
    try {
        await db('articles').insert({ title, content });
        res.status(201).json({ success: 'Article added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add article' });
    }
});

// Main route to render the home page with EJS
app.get('/', async (req, res) => {
    try {
        const articles = await db.select('*').from('articles');
        const subjecttalk = "Today's mindful talk topic goes here!";
        res.render('index', { articles, subjecttalk });
    } catch (err) {
        res.status(500).json({ error: 'Failed to load homepage' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//fim do terceiro membro do grupo
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index', { subjecttalk }) 
   //renders the views/index.ejs file 
   //pass the name of the restaurant to the views/index.ejs file 
})
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


