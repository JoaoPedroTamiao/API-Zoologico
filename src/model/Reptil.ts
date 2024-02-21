import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
/** 
 * Representa um tipo específico de animal no zoológico, no caso, um réptil. 
 * Esta classe estende a classe Animal, significando que herda características e comportamentos gerais de animais,
 * enquanto também pode adicionar ou modificar comportamentos específicos de répteis.
 */
export class Reptil extends Animal {
  // Métodos e propriedades específicos de répteis podem ser adicionados aqui.
  /**
 * Criando o atributo da Classe
 */
  private tipo_de_escamas: string;

  /**
 * Construtor da classe que inicializa as propriedades nome, idade, genero e tipo_de_escamas.
 * 
 * @param _nome O nome do animal a ser atribuído
 * @param _idade A idade do animal a ser atribuída
 * @param _genero O gênero do animal a ser atribuído
 * @param _tipo_de_escamas O tipo de escamas do animal a ser atribuído
 */
  constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
    // Chama o construtor da superclasse Animal para inicializar as propriedades nome, idade e genero
    super(_nome, _idade, _genero);
    // Define o tipo de escamas do animal com o valor passado como argumento
    this.tipo_de_escamas = _tipo_de_escamas;
  }


  /**
 * Retorna o tipo de escamas do animal.
 * 
 * @returns O tipo de escamas do animal
 */
  public getTipo_De_Escamas(): string {
    return this.tipo_de_escamas;
  }

  /**
  * Define o tipo de escamas do animal.
  * 
  * @param _tipo_de_escamas O tipo de escamas do animal a ser atribuído
  */
  public setTipo_De_Escamas(_tipo_de_escamas: string): void {
    this.tipo_de_escamas = _tipo_de_escamas;
  }

  static async listarRepteis() {
    const listaDeRepteis: Array<Reptil> = [];
    try {
      const queryReturn = await database.query(`SELECT * FROM  reptil  `);
      queryReturn.rows.forEach(reptil => {
        listaDeRepteis.push(reptil);
      });

      // só pra testar se a lista veio certa do banco
      console.log(listaDeRepteis);

      return listaDeRepteis;
    } catch (error) {
      console.log('Erro no modelo');
      console.log(error);
      return "error";
    }
  }


  static async cadastrarReptil(reptil: Reptil): Promise<any> {
    try {
        let insertResult = false;
        await database.query(`INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
            VALUES
            ('${reptil.getNome().toUpperCase()}', ${reptil.getIdade()}, '${reptil.getGenero().toUpperCase()}', '${reptil.getTipo_De_Escamas().toUpperCase()}');
        `).then((result) => {
            if(result.rowCount != 0) {
                insertResult = true;
            }
        });
        return insertResult;
    } catch(error) {
        return error;
    }
}
  
}