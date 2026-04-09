import express from 'express';
const app = express();
app.use(express.json());

import router from './routes.js';
app.use(router);

const PORT = 3000;

app.listen(PORT, () => console.log(`API conectada a porta ${PORT}`));