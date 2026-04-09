import { Router } from "express";
import { createTable, insertPessoa, selectPessoas, selectPessoa, updatePessoa, deletePessoa } from './Controler/Person.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "mensage": "Api Rodando"
    });
})

router.get('/persons', selectPessoas);
router.get('/person', selectPessoa);
router.post('/person', insertPessoa);
router.put('/person', updatePessoa);
router.delete('/person', deletePessoa);

export default router;