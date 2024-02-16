import { Animal } from "./Animal";
/** 
 * Representa um habitat no zoológico, onde os animais vivem. 
 */
export class Habitat {
  /**
 * Criando o atributo da Classe
 */
  private nome: string;
  /**
 * Criando o atributo da Classe
 */
  private lista_De_Animais: Animal;

  /**
 * Construtor da classe que inicializa as propriedades nome e lista_De_Animais.
 * 
 * @param _nome O nome do habitat a ser atribuído
 * @param _lista_De_Animais A lista de animais a ser atribuída
 */
  constructor(_nome: string, _lista_De_Animais: Animal) {
    // Define o nome do habitat com o valor passado como argumento
    this.nome = _nome;
    // Define a lista de animais com o valor passado como argumento
    this.lista_De_Animais = _lista_De_Animais;
  }


  /**
 * Retorna o nome do habitat.
 * 
 * @returns O nome do habitat
 */
  public getNome(): string {
    return this.nome;
  }

  /**
  * Define o nome do habitat.
  * 
  * @param _nome O nome do habitat a ser atribuído
  */
  public setNome(_nome: string): void {
    this.nome = _nome;
  }

  /**
  * Retorna a lista de animais.
  * 
  * @returns A lista de animais
  */
  public getLista_De_Animais(): Animal {
    return this.lista_De_Animais;
  }

  /**
  * Define a lista de animais.
  * 
  * @param _lista_De_Animais A lista de animais a ser atribuída
  */
  public setLista_De_Animais(_lista_De_Animais: Animal): void {
    this.lista_De_Animais = _lista_De_Animais;
  }


}