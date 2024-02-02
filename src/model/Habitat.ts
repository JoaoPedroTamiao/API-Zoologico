import { Animal } from "./Animal";

export class Habitat {
    private nome: string;
    private lista_de_Animais: Animal;
  
    constructor(_nome: string, _lista_de_Animais: Animal) {
      this.nome = _nome;
      this.lista_de_Animais = _lista_de_Animais;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(_nome: string): void {
      this.nome = _nome;
    }
  
    public getLista_de_Animais(): Animal {
      return this.lista_de_Animais;
    }
  
    public setLista_de_Animais(_lista_de_Animais: Animal): void {
      this.lista_de_Animais = _lista_de_Animais;
    }
  
    
}
  