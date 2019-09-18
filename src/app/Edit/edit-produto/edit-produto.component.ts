import { ProdutosService } from './../../services/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from './../../model/produto';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  edit:Boolean = true;
  idProduto:number;
  produto:Produto;
  items: MenuItem[];
  activeItem: MenuItem;
  id=0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private produtosService:ProdutosService,
    private router:Router,
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.idProduto = params['id'];
      }
    )
    this.produtosService.getProdutoById(this.idProduto).subscribe(
      (data)=>{
        console.log(data);
        this.produto =data;
      }
    )

    this.items = [
      {label: 'Dados gerais', icon: 'pi pi-user-edit',
      command: (data)=>{
        this.id=0;
      }},
      {label: 'Estoque', icon: 'pi pi-desktop',
      command: (data)=>{
        this.id=1;
      }}
      ];

    this.activeItem = this.items[0];
  }

  editProd(produto:Produto){
    this.produtosService.alterarProduto(produto).subscribe((data)=>{
      this.router.navigate(['/admin']);    
    });
  }

}
