import { Animal } from "./Animal";
export class Mamifero extends Animal {
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

}