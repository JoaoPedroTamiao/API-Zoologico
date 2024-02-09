import { Animal } from "./Animal";
import { Atracao } from "./Atracao";
export class Zoologico {
  private nome: string;
  private lista_De_Atracoes: Atracao;

  constructor(_nome: string, _lista_De_Atracoes: Atracao) {
    this.nome = _nome;
    this.lista_De_Atracoes = _lista_De_Atracoes;
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
 * Retorna a lista de atrações.
 * 
 * @returns A lista de atrações
 */
  public getLista_De_Atracoes(): Atracao {
    return this.lista_De_Atracoes;
  }

  /**
  * Define a lista de atrações.
  * 
  * @param _lista_De_Atracoes A lista de atrações a ser atribuída
  */
  public setLista_De_Atracoes(_lista_De_Atracoes: Atracao): void {
    this.lista_De_Atracoes = _lista_De_Atracoes;
  }



}
