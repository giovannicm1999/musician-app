import { ProdutosService } from './../services/produtos.service';
import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../model/produto';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desc-produto',
  templateUrl: './desc-produto.component.html',
  styleUrls: ['./desc-produto.component.css']
})
export class DescProdutoComponent implements OnInit {
  id:number;
  produto: Produto;
 
  constructor(
    private produtoService :ProdutosService,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:any)=>{
        this.id = params['id'];
      }
    );

    this.produtoService.getProdutoById(this.id).subscribe(
      (data)=>{
        this.produto=data;
      }
    );

  }

}
