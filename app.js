// Importing everything
import express from 'express';
import knex from 'knex';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 2222;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//database
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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//render EJS template
app.get('/', async (req, res) => {
    try {
        const articles = await db.select('*').from('articles');
        const subjecttalk = "Today's mindful talk topic goes here!";
        res.render('index', { articles, subjecttalk });
    } catch (err) {
        res.status(500).json({ error: 'Failed to load homepage' });
    }
});

//get articles
app.get('/articles', async (req, res) => {
    try {
        const articles = await db.select('*').from('articles');
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch articles' });
    }
});


//server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
