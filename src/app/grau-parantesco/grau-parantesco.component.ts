import { Component, OnInit } from '@angular/core';
import { GrauParentescoService } from '../service/grau-parentesco.service';

@Component({
  selector: 'app-grau-parantesco',
  templateUrl: './grau-parantesco.component.html',
  styleUrls: ['./grau-parantesco.component.css']
})
export class GrauParantescoComponent implements OnInit {

   public grauParentesco: Array<any>= [];
  constructor(private grauParantescoService: GrauParentescoService) { }

  ngOnInit(): void {
     this.listarGrauParentesco()
  }



   listarGrauParentesco(){
    this.grauParantescoService.listarTodas().subscribe((resposnse)=>{
      this.grauParentesco= resposnse
    })
   }
}

