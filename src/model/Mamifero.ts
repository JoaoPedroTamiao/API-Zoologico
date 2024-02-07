import { Animal } from "./Animal";
export class Mamifero extends Animal {
  private raca: string;

  constructor(_nome: string, _idade: number, _genero: string, _raca: string) {
    super(_nome, _idade, _genero);
    this.raca = _raca;
  }

  public getRaca(): string {
    return this.raca;
  }

  public setRaca(_raca: string): void {
    this.raca = _raca;
  }
}