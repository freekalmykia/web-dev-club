import express from 'express';
import cors from 'cors';
import { readFile } from 'fs/promises';
import path from 'node:path';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import bodyParser from 'body-parser';

async function main() {
    const app = express();

    const dbPath = path.join(process.cwd(), './data_sample.json');

    const adapter = new JSONFile(dbPath);
    const db = new Low(adapter);

    await db.read();

    const people = db.data;

    console.log(db.data);

    const PORT = 5000;

    app.listen(PORT, () => {
        console.log('simple server is listening to port 5000');
    });

    app.use(cors());
    app.use(bodyParser.json());

    // get all people
    app.get('/people', async (req, res) => {
        await db.read();
        console.log(people);
        res.status(200).send(people);
    });

    // get person by id
    app.get('/people/:id', async (req, res) => {
        await db.read();
        const person = people.find(person => person.id === req.params.id);
        res.status(200).send(person);
    }) ;

    // add person
    app.post('/people', async (req, res) => {
        const person = req.body;
        people.push(person);
        await db.write();
        res.status(201).send({ message: 'Person added' });
    })

    // update person
    app.patch('/people/:id', async (req, res) => {
        const id = req.params.id;
        const info = req.body;
        const index = people.findIndex(person => person.id === id);
        people[index] = { ...people[index], ...info };
        await db.write();
        res.status(200).send({ message: 'Person updated' });
    });

    // delete person
    app.delete('/people/:id', async (req, res) => {
        const id = req.params.id;
        const index = people.findIndex(person => person.id === id);
        people.splice(index, 1);
        await db.write();
        res.status(202).send({ message: 'Person deleted' });
    })
}

main();