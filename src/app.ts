import express from "express";
import cors from "cors";
import { Ave } from "./model/Ave";
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";

const port: number = 3001;
const server = express();

server.use(express.json());
server.use(cors());

// Rotas para testes individuais
server.get('/testeAve', (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 12);
    res.json(ave);
});

server.get('/testeReptil', (req, res) => {
    let reptil: Reptil = new Reptil(`Jaraqué`, 15, `Masculino`, `escamosa`);
    res.json(reptil);
});

server.get('/testeMamifero', (req, res) => {
    let mamifero: Mamifero = new Mamifero(`Jubileu`, 26, `Masculino`, `gente/homi`);
    res.json(mamifero);
});

// Rotas para cadastro
server.post('/cadastroAve', (req, res) => {
    try {
        const { nome, idade, genero, envergadura } = req.body;
        const ave = new Ave(nome, idade, genero, envergadura);

        console.log('Ave cadastrada:', ave);
        res.json({ mensagem: "Ave cadastrada com sucesso", ave });
    } catch (error) {
        console.error('Erro ao cadastrar ave:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar ave" });
    }
});

server.post('/cadastroReptil', (req, res) => {
    try {
        const { nome, idade, genero, tipo_de_escamas } = req.body;
        const reptil = new Reptil(nome, idade, genero, tipo_de_escamas);

        console.log('Reptil cadastrado:', reptil);

        res.json({ mensagem: "Reptil cadastrado com sucesso", reptil });
    } catch (error) {
        console.error('Erro ao cadastrar reptil:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar reptil" });
    }
});

server.post('/cadastroMamifero', (req, res) => {
    try {
        const { nome, idade, genero, raca } = req.body;
        const mamifero = new Mamifero(nome, idade, genero, raca);

        console.log('Mamifero cadastrado:', mamifero);
     

        res.json({ mensagem: "Mamifero cadastrado com sucesso", mamifero });
    } catch (error) {
        console.error('Erro ao cadastrar Mamifero:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar mamifero" });
    }
});


server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});
