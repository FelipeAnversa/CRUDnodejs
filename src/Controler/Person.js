import openDB from '../configDB.js';

export async function createTable() {
    openDB().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )');
    });
};

export async function selectPessoas(req, res) {
    openDB().then(db => {
        db.all('SELECT * FROM Pessoa')
        .then(persons => res.json(persons));
    });
};

export async function selectPessoa(req, res) {
    let id = req.body.id;
    openDB().then(db => {
        db.get('SELECT * FROM Pessoa WHERE id=?', [id])
        .then(person => res.json(person));
    });
};

export async function insertPessoa(req, res) {
    let person = req.body;
    openDB().then(db => {
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [person.nome, person.idade]);
    });
    res.json({
        "statusCode": 200
    });
};

export async function updatePessoa(req, res) {
    let person = req.body;
    openDB().then(db => {
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [person.nome, person.idade, person.id]);
    });
    res.json({
        "statusCode": 200
    });
};


export async function deletePessoa(req, res) {
    let id = req.body.id;
    openDB().then(db => {
        db.get('DELETE FROM Pessoa WHERE id=?', [id])
        .then(res => res);
    });
    res.json({
        "statusCode": 200
    });
};