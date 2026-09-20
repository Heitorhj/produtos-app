import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';
import { Produto } from '../models/produto';
// Injetando o serviço ProdutoService para que possamos utilizá-lo dentro do componente HomePage.
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})


export class HomePage {

  // Isso é um objeto que representa um produto, com propriedades como id, nome, quantidade e valor.
  
  produto: Produto = {
    id: 1,
    nome: 'Teclado',
    quantidade: 10,
    valor: 120.0,
  }

  titulo = "Gerenciamento de Produtos"; // variável para interpolação no Angular
  // Aqui estamos informando ao Angular que a HomePage precisa de um ProdutoService
  constructor(private produtoService: ProdutoService) {}
}
