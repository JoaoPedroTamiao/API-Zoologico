import cors from "cors";
import express from "express";

const port: number = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/teste', (req, res) => {
    res.json('Olá mundo!!');
})

server.listen(port, () => {
    console.log(`Servidor está esutando no endereço http://localhost:${port}`);
})