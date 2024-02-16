/** 
 * Representa um animal genérico no zoológico.
 * Esta classe serve como uma base para representar características e comportamentos comuns a todos os animais.
 */ 
export class Animal {
  // Propriedades e métodos comuns a todos os animais podem ser adicionados aqui.
  /**
   * Criando o atributo da Classe
   */
  private nome: string;
    /**
   * Criando o atributo da Classe
   */
  private idade: number;
    /**
   * Criando o atributo da Classe
   */
  private genero: string;

  /**
 * Construtor da classe que inicializa as propriedades nome, idade e genero.
 * 
 * @param _nome O nome do animal a ser atribuído
 * @param _idade A idade do animal a ser atribuída
 * @param _genero O gênero do animal a ser atribuído
 */
  constructor(_nome: string, _idade: number, _genero: string) {
    // Define o nome do animal com o valor passado como argumento
    this.nome = _nome;
    // Define a idade do animal com o valor passado como argumento
    this.idade = _idade;
    // Define o gênero do animal com o valor passado como argumento
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
