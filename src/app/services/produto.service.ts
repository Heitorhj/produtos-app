import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto';

// Responsável por fornecer serviços relacionados a produtos, como operações de CRUD (Create, Read, Update, Delete) 
// e outras funcionalidades relacionadas a produtos.
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  // O método getProdutos() é responsável por fazer uma requisição HTTP GET para o endpoint 'http://localhost:8080/api/produtos'
  // e retornar uma lista de produtos do tipo Produto[].
  // [] é um arry / lista
  getProdutos() {
    return this.http.get<Produto[]>('http://localhost:8080/api/produtos')
  }

}