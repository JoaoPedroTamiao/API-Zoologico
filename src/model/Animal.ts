export class Animal {
  private nome: string;
  private idade: number;
  private genero: string;

  constructor(_nome: string, _idade: number, _genero: string) {
    this.nome = _nome;
    this.idade = _idade;
    this.genero = _genero;
  }

  /**
 * Retorna o nome do animal.
 * 
 * @returns O nome do animal
 */
  public getNome(): string {
    return this.nome;
  }

  /**
  * Define o nome do animal.
  * 
  * @param _nome O nome do animal a ser atribuído
  */
  public setNome(_nome: string): void {
    this.nome = _nome;
  }


  /**
 * Retorna a idade do animal.
 * 
 * @returns A idade do animal
 */
  public getIdade(): number {
    return this.idade;
  }

  /**
  * Define a idade do animal.
  * 
  * @param _idade A idade do animal a ser atribuída
  */
  public setIdade(_idade: number): void {
    this.idade = _idade;
  }

  /**
   * Retorna o gênero do animal.
   * 
   * @returns O gênero do animal
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
  * Define o gênero do animal.
  * 
  * @param _genero O gênero do animal a ser atribuído
  */
  public setGenero(_genero: string): void {
    this.genero = _genero;
  }


}
