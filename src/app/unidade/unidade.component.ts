import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../service/unidade.service';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

   public unidades : Array<any> = [];
  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.listarUnidades()
  }

   listarUnidades(){
    this.unidadeService.listarTodas().subscribe((resposnse)=>{
      this.unidades= resposnse
    })
   }
}
