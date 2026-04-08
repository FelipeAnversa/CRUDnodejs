import openDB from '../configDB.js';

export async function createTable() {
    openDB().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )');
    });
};

export async function insertPessoa(person) {
    openDB().then(db => {
        db.run('INSERT INTO Pessoa (nome, idade) VALUES (?,?)', [person.nome, person.idade]);
    });
};

export async function updatePessoa(person) {
    openDB().then(db => {
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [person.nome, person.idade, person.id]);
    });
};