import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
/** 
 * Representa um tipo específico de animal no zoológico, no caso, um mamífero. 
 * Esta classe estende a classe Animal, significando que herda características e comportamentos gerais de animais,
 * enquanto também pode adicionar ou modificar comportamentos específicos de mamíferos.
 */
export class Mamifero extends Animal {
  // Métodos e propriedades específicos de mamíferos podem ser adicionados aqui.

  /**
 * Criando o atributo da Classe
 */
  private raca: string;

  /**
   * Construtor da classe que inicializa as propriedades nome, idade, genero e raca.
   * 
   * @param _nome O nome do animal a ser atribuído
   * @param _idade A idade do animal a ser atribuída
   * @param _genero O gênero do animal a ser atribuído
   * @param _raca A raça do animal a ser atribuída
   */
  constructor(_nome: string, _idade: number, _genero: string, _raca: string) {
    // Chama o construtor da superclasse Animal para inicializar as propriedades nome, idade e genero
    super(_nome, _idade, _genero);
    // Define a raça do animal com o valor passado como argumento
    this.raca = _raca;
  }


  /**
 * Retorna a raça do animal.
 * 
 * @returns A raça do animal
 */
  public getRaca(): string {
    return this.raca;
  }

  /**
  * Define a raça do animal.
  * 
  * @param _raca A raça do animal a ser atribuída
  */
  public setRaca(_raca: string): void {
    this.raca = _raca;
  }

  static async listarMamiferos() {
    const listaDeMamiferos: Array<Mamifero> = [];
    try {
      const queryReturn = await database.query(`SELECT * FROM  mamifero;  `);
      queryReturn.rows.forEach(Mamifero => {
        listaDeMamiferos.push(Mamifero);
      });

      // só pra testar se a lista veio certa do banco
      console.log(listaDeMamiferos);

      return listaDeMamiferos;
    } catch (error) {
      console.log('Erro no modelo');
      console.log(error);
      return "error";
    }
  }


  static async cadastrarMamifero(mamifero: Mamifero): Promise<any> {
    try {
        let insertResult = false;
        await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
            VALUES
            ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
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