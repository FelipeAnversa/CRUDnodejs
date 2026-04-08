import { createTable, insertPessoa, updatePessoa } from './Controler/Person.js';

import express from 'express';
const app = express();
app.use(express.json());

createTable();

app.get('/', (req, res) => {
    try {
        res.send("Hello World!");
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.post('/person', (req, res) => {
    try {
        insertPessoa(req.body);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

app.put('/person', (req, res) => {
    try {
        updatePessoa(req.body);
        res.json({
            "statusCode": 200
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
});

const PORT = 3000;

app.listen(PORT, () => console.log(`API conectada a porta ${PORT}`));