import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../model/usuario';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-menu-cadastro',
  templateUrl: './menu-cadastro.component.html',
  styleUrls: ['./menu-cadastro.component.css']
})
export class MenuCadastroComponent implements OnInit {
  constructor() { }
  
  items: MenuItem[];
  pessoa: Pessoa =new Pessoa();
  id=0;
  activeIndex: number;

  updateId(event){
    this.id=event;
  }
  updatePessoa(event){
    console.log(event);
  }

  ngOnInit() {
    this.items = [
      {label: 'Dados Pessoais',
      command:(data)=>{
        this.id=0;
      }},
      {label: 'Endereços',
      command:(data)=>{
        this.id=1;
      }},
      {label: 'Cartões',
      command:(data)=>{
        this.id=2;
      }},
      {label: 'Senha',
      command:(data)=>{
        this.id=3;
      }}
    ];
  }

}
