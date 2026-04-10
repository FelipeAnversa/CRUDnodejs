import express from 'express';
import cors from 'cors';
import { createTable } from './Controler/User.js';
const app = express();

app.use(cors());

app.use(express.json());

createTable();

import router from './routes.js';
app.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`API conectada a porta ${PORT}`));