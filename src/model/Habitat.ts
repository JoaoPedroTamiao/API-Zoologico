import { Animal } from "./Animal";

export class Habitat {
  private nome: string;
  private lista_De_Animais: Animal;

  constructor(_nome: string, _lista_De_Animais: Animal) {

    this.nome = _nome;
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