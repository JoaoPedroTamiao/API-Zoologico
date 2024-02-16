import { Animal } from "./Animal";
import { Habitat } from "./Habitat";

/** 
 * Representa uma atração dentro do zoológico, onde os visitantes podem interagir e aprender sobre os animais.
 * Pode incluir exibições, apresentações, áreas interativas, entre outros.
 */
export class Atracao {
  // Propriedades e métodos relacionados à atração podem ser adicionados aqui.


  /**
 * Criando o atributo da Classe
 */
  private nome: string;
  /**
 * Criando o atributo da Classe
 */
  private lista_De_Habitats: Habitat;

  /**
 * Construtor da classe que inicializa as propriedades nome e lista_De_Habitats.
 * 
 * @param _nome O nome do animal a ser atribuído
 * @param _lista_De_Habitats A lista de habitats a ser atribuída
 */
  constructor(_nome: string, _lista_De_Habitats: Habitat) {
    // Define o nome do animal com o valor passado como argumento
    this.nome = _nome;
    // Define a lista de habitats com o valor passado como argumento
    this.lista_De_Habitats = _lista_De_Habitats;
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
  * Retorna a lista de habitats.
  * 
  * @returns A lista de habitats
  */
  public getLista_De_Habitats(): Habitat {
    return this.lista_De_Habitats;
  }

  /**
  * Define a lista de habitats.
  * 
  * @param _lista_De_Habitats A lista de habitats a ser atribuída
  */
  public setLista_De_Habitats(_lista_De_Habitats: Habitat): void {
    this.lista_De_Habitats = _lista_De_Habitats;
  }



}
