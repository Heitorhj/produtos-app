// O export permite que a interface Produto seja utilizada em outros arquivos do projeto
//  promovendo a reutilização de código e a consistência na definição de produtos em diferentes partes da aplicação.
export interface Produto {
    id: number;
    nome: string;
    quantidade: number;
    valor: number;
}