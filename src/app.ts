import express from "express";
import cors from "cors";
import { Ave } from "./model/Ave";
import { Reptil } from "./model/Reptil";
import { Mamifero } from "./model/Mamifero";
import { Habitat } from "./model/Habitat";
import { Zoologico } from "./model/Zoologico";
import { Atracao } from "./model/Atracao";
import { DatabaseModel } from "./model/DatabaseModel";

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
    let reptil: Reptil = new Reptil(`Jaraqué`, 15, `Masculino`, `Placóides`);
    res.json(reptil);
});

server.get('/testeMamifero', (req, res) => {
    let mamifero: Mamifero = new Mamifero(`Jubileu`, 26, `Masculino`, `Humano`);
    res.json(mamifero);
});

// Rotas para cadastro
server.post('/cadastroAve', (req, res) => {
    try {
        const { nome, idade, genero, envergadura } = req.body;
        const ave = new Ave(nome, idade, genero, envergadura);

        console.log('Ave cadastrada:', ave);
        res.json({ mensagem: "Ave cadastrada com sucesso: ", ave });
    } catch (error) {
        console.error('Erro ao cadastrar ave: ', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar ave" });
    }
});

server.post('/cadastroReptil', (req, res) => {
    try {
        const { nome, idade, genero, tipo_de_escamas } = req.body;
        const reptil = new Reptil(nome, idade, genero, tipo_de_escamas);

        console.log('Reptil cadastrado: ', reptil);

        res.json({ mensagem: "Reptil cadastrado com sucesso: ", reptil });
    } catch (error) {
        console.error('Erro ao cadastrar reptil:', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar reptil" });
    }
});

server.post('/cadastroMamifero', (req, res) => {
    try {
        const { nome, idade, genero, raca } = req.body;
        const mamifero = new Mamifero(nome, idade, genero, raca);

        console.log('Mamifero cadastrado: ', mamifero);


        res.json({ mensagem: "Mamifero cadastrado com sucesso: ", mamifero });
    } catch (error) {
        console.error('Erro ao cadastrar Mamifero: ', error);
        res.status(500).json({ mensagem: "Erro ao cadastrar mamifero" });
    }
});
let bancoDadosAve: Ave[] = [];
function persistirAve(ave: Ave) {
    try {
        bancoDadosAve.push(ave);
        console.log(`Ave persistida: `, ave);
    } catch (error) {
        console.error(`Erro ao persistir os dados\n ${error}`);
    }
}
//Testando a Classe habitat
server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json(`Habitat criado`);
})
//Testando a Classe Atracão
server.post('/Atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json(`Atração criada`);
})
//Testando a classe Zoologico
server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json(`Zoologico criado`);
})

server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

server.post('/new/reptil', async (req, res) => {
    const { nome, idade, genero, tipo_de_escamas } = req.body;

    const novoReptil = new Reptil(nome, idade, genero, tipo_de_escamas);

    const result = await Reptil.cadastrarReptil(novoReptil);

    if (result) {
        return res.status(200).json('Reptil cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o réptil no banco de dados');
    }

})

server.get('/ave', async (req, res) => {
    const aves = await Ave.listarAves();

    res.status(200).json(aves);
})

server.post('/new/ave', async (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;

    const novaAve = new Ave(nome, idade, genero, envergadura);

    const result = await Ave.cadastrarAves(novaAve);

    if (result) {
        return res.status(200).json('Ave cadastrada com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar a ave no banco de dados');
    }

})

server.get('/mamifero', async (req, res) => {
    const mamiferos = await Mamifero.listarMamiferos();

    res.status(200).json(mamiferos);
})

server.post('/new/mamifero', async (req, res) => {
    const { nome, idade, genero, raca } = req.body;

    const novoMamifero = new Mamifero(nome, idade, genero, raca);

    const result = await Mamifero.cadastrarMamifero(novoMamifero);

    if (result) {
        return res.status(200).json('Mamifero cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o Mamifero no banco de dados');
    }

})


new DatabaseModel().testeConexao().then((resbd) => {
    if (resbd) {
        // Resposta se o servidor está on-line
        server.listen(port, () => {
            console.log(`Servidor está escutando no endereço http://localhost:${port}`);
        });
    } else {
        console.log("Não foi possivel conectar ao banco de dados");
    }
})