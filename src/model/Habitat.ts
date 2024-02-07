import { Animal } from "./Animal";

export class Habitat {
  private nome: string;
  private lista_De_Animais: Array <Animal>;

  constructor(_nome: string, _lista_De_Animais: []) {

    this.nome = _nome;
    this.lista_De_Animais = _lista_De_Animais;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(_nome: string): void {
    this.nome = _nome;
  }

  public getLista_De_Animais(): Animal[] {
    return this.lista_De_Animais
  }


  public setLista_De_Animais(_lista_De_Animais: []): void {
    this.lista_De_Animais = _lista_De_Animais;
  }

}