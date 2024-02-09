import { Animal } from "./Animal";
export class Reptil extends Animal {
  private tipo_de_escamas: string;

  constructor(_nome: string, _idade: number, _genero: string, _tipo_de_escamas: string) {
    super(_nome, _idade, _genero);
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