import { Animal } from "./Animal";
import { Atracao } from "./Atracao";
/** 
 * Representa o zoológico, onde os animais são mantidos e exibidos ao público. 
 * Esta classe fornece uma estrutura para gerenciar os habitats, atrações e animais dentro do zoológico.
 */
export class Zoologico {
  // Propriedades e métodos relacionados ao zoológico podem ser adicionados aqui.
  /**
 * Criando o atributo da Classe
 */
  private nome: string;
  /**
 * Criando o atributo da Classe
 */
  private lista_De_Atracoes: Atracao;

  /**
   * Construtor da classe que inicializa as propriedades nome e lista_De_Atracoes.
   * 
   * @param _nome O nome do habitat a ser atribuído
   * @param _lista_De_Atracoes A lista de atrações a ser atribuída
   */
  constructor(_nome: string, _lista_De_Atracoes: Atracao) {
    // Define o nome do habitat com o valor passado como argumento
    this.nome = _nome;
    // Define a lista de atrações com o valor passado como argumento
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
