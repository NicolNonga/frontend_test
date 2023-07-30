import { Component, OnInit } from '@angular/core';
import { EspeicalidadeService } from '../espeicalidade.service';

@Component({
  selector: 'app-especilaidade',
  templateUrl: './especilaidade.component.html',
  styleUrls: ['./especilaidade.component.css']
})
export class EspecilaidadeComponent implements OnInit {

  public especiliades : Array<any> =  []
  constructor(private especialidadeService: EspeicalidadeService) { }

  ngOnInit(): void {
    this.listarTodasEspecialidade()
  }


  listarTodasEspecialidade(){

      this.especialidadeService.listarTodas().subscribe((response)=>{
        this.especiliades= response
        
      })
  }

}
