import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
=======
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {
<<<<<<< HEAD
  dataHora:any;
  descricao:any;
  valor:any;
  tipo:any;
  
  correntistas:any;
  correntista:any;

  
  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  save(): void {
    console.log(this.correntista)
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      dataHora:this.dataHora

    };
    console.log(movimentacao);
    this.movimentacaoService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
=======

  constructor() { }

  ngOnInit(): void {
>>>>>>> a4f9bf7e1a502d70626b1c7d741f1168d0217d25
  }

}
