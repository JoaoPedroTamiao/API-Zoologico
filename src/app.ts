import express from "express";
import cors from "cors";
import { Ave } from "./model/Ave";
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";

const port: number = 3001;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/teste1', (req, res) => {
    let ave: Ave = new Ave(`Papagaio`, 30, `Masculino`, 12);
    res.json(ave);
});

server.get('/teste2', (req, res) => {
    let reptil: Reptil = new Reptil(`Jaraqué`, 15, `Masculino`, `escamosa`);
    res.json(reptil);
});

server.get('/teste3', (req, res) => {
    let mamifero: Mamifero = new Mamifero(`Jubileu`, 26, `Masculino`, `gente/homi`);
    res.json(mamifero);
});

server.post('/cadastro', (req, res) => {
    try {
        const { nome, idade, genero, envergadura } = req.body;
        const ave = new Ave(nome, idade, genero, envergadura);

        console.log('Ave cadastrada:', ave);
        persistirAve(ave);

        res.json({ mensagem: "Ave cadastrada com sucesso", ave });
    } catch (error) {
        console.error('Erro ao cadastrar ave:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar ave" });
    }
});

let bancoDadosAve: Ave[] = [];
function persistirAve(ave: Ave) {
    try {
        bancoDadosAve.push(ave);
        console.log(`Ave persistida:`, ave);
    } catch (error) {
        console.error(`Erro ao persistir os dados\n ${error}`);
    }
}

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});
