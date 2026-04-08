import { createTable } from './Controler/Person.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.post('/person', (req, res) => {
    console.log(req.body);
    res.json({
        "statusCode": 200
    });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`API conectada a porta ${PORT}`));