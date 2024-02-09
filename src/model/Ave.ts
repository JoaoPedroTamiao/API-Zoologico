import { Animal } from "./Animal";

export class Ave extends Animal {
  private envergadura: number;

  constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
    super(_nome, _idade, _genero);
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