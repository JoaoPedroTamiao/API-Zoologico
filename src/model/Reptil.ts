import { Animal } from "./Animal";
export class Reptil extends Animal {
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

}