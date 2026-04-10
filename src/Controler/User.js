import openDB from '../configDB.js';
import bcrypt from 'bcrypt';

export async function createTable() {
    try {
        const db = await openDB();
        await db.exec(
            'CREATE TABLE IF NOT EXISTS User ( id INTEGER PRIMARY KEY, login TEXT UNIQUE, password TEXT )'
        );
    } catch (error) {
        console.error("Erro ao criar tabela:", error);
    }
};

export async function selectUsers(req, res) {
    try {
        const db = await openDB();
        const users = await db.all(
            'SELECT id, login FROM User'
        );
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({ 
            "statusCode": 500, 
            "message": "Erro ao Selecionar Users" 
        });
    }
};

export async function selectUser(req, res) {
    const id = req.body.id;
    if (!id) {
        return res.status(400)
        .json({ 
            "statusCode": 400, 
            "message": "Id é obrigatório" 
        });
    }
    try {
        const db = await openDB();
        const user = await db.get(
            'SELECT id, login FROM User WHERE id=?', 
            [id]
        );
        res.json(user || { message: "Usuário não encontrado" });
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({ 
            "statusCode": 500, 
            "message": "Erro ao Selecionar User" 
        });
    }
};

export async function insertUser(req, res) {
    const { login, password } = req.body;
    if (!login || !password) {
        return res.status(400)
        .json({ 
            "statusCode": 400, 
            "message": "Login e senha são obrigatórios" 
        });
    }
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const db = await openDB();
        await db.run(
            'INSERT INTO User (login, password) VALUES (?,?)', 
            [login, passwordHash]
        );
        res.status(201)
        .json({ 
            "statusCode": 201, 
            "message": "Conta Criada com Sucesso" 
        });
    } catch (error) {
        if (error.message && error.message.includes('UNIQUE')) {
            return res.status(400)
            .json({ 
                "statusCode": 400, 
                "message": "Login já existe" 
            });
        }
        console.error(error);
        res.status(500)
        .json({ 
            "statusCode": 500, 
            "message": "Erro ao criar conta" 
        });
    }
};

export async function updateUser(req, res) {
    const { id, login, password } = req.body;
    if (!id || !login || !password) {
        return res.status(400)
        .json({ 
            "statusCode": 400, 
            "message": "ID, Login e senha são obrigatórios" 
        });
    }
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const db = await openDB();
        await db.run(
            'UPDATE User SET login=?, password=? WHERE id=?', 
            [login, passwordHash, id]
        );
        res.json({ 
            "statusCode": 200, 
            "message": "Conta Atualizada com Sucesso" 
        });
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({ 
            "statusCode": 500, 
            "message": "Erro ao atualizar conta" 
        });
    }
};

export async function deleteUser(req, res) {
    const id = req.body.id;
    if (!id) {
        return res.status(400)
        .json({ 
            "statusCode": 400, 
            "message": "Id é obrigatório" 
        });
    }
    try {
        const db = await openDB();
        await db.run(
            'DELETE FROM User WHERE id=?', 
            [id]
        );
        res.json({ 
            "statusCode": 200, 
            "message": "Conta Deletada com Sucesso" 
        });
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({ 
            "statusCode": 500, 
            "message": "Erro ao Deletar Conta" 
        });
    }
};