import { Animal } from "./Animal";
import { Habitat } from "./Habitat";

export class Atracao {
  private nome: string;
  private lista_De_Habitats: Habitat;

  constructor(_nome: string, _lista_De_Habitat: Habitat) {
    this.nome = _nome;
    this.lista_De_Habitats = _lista_De_Habitat;
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
