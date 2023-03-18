const express = require('express');
const cors = require('cors');
const { readFile } = require('fs/promises');
const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log('simple server is listening to port 5000');
});

app.use(cors());

app.get('/file', async (req, res) => {
    const fileContent = await readFile('./data_sample.json', { encoding: 'utf8' });
    res.status(200).send(fileContent);
})