import { Animal } from "./Animal";
export class Atracao {
  private nome: string;
  private lista_De_Animais: Animal;

  constructor(_nome: string, _lista_De_Animais: Animal) {
    this.nome = _nome;
    this.lista_De_Animais = _lista_De_Animais;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(_nome: string): void {
    this.nome = _nome;
  }
  /*
    public getLista_De_Animais(): Animal {
      return this.lista_De_Animais;
    }
  
    public setLista_De_Animais(_lista_De_Animais: Animal): void {
      this.lista_De_Animais = _lista_De_Animais;
    }
  
    */
}
