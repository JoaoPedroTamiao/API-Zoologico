import { Animal } from "./Animal";
/** 
 * Representa um tipo específico de animal no zoológico, no caso, uma ave. 
 * Esta classe estende a classe Animal, significando que herda características e comportamentos gerais de animais,
 * enquanto também pode adicionar ou modificar comportamentos específicos de aves.
 */
export class Ave extends Animal {
  // Métodos e propriedades específicos de aves podem ser adicionados aqui.

  /**
 * Criando o atributo da Classe
 */
  private envergadura: number;

  /**
 * Construtor da classe que inicializa as propriedades nome, idade, genero e envergadura.
 * 
 * @param _nome O nome do animal a ser atribuído
 * @param _idade A idade do animal a ser atribuída
 * @param _genero O gênero do animal a ser atribuído
 * @param _envergadura A envergadura do animal a ser atribuída
 */
  constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
    // Chama o construtor da superclasse Animal para inicializar as propriedades nome, idade e genero
    super(_nome, _idade, _genero);
    // Define a envergadura do animal com o valor passado como argumento
    this.envergadura = _envergadura;
  }


  /**
 * Retorna a envergadura do animal.
 * 
 * @returns A envergadura do animal
 */
  public getEnvergadura(): number {
    return this.envergadura;
  }

  /**
  * Define a envergadura do animal.
  * 
  * @param _envergadura A envergadura do animal a ser atribuída
  */
  public setEnvergadura(_envergadura: number): void {
    this.envergadura = _envergadura;
  }

}