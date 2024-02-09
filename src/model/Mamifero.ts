import { Animal } from "./Animal";
export class Mamifero extends Animal {
  private raca: string;

  constructor(_nome: string, _idade: number, _genero: string, _raca: string) {
    super(_nome, _idade, _genero);
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