import { Component, OnInit } from '@angular/core';
import { MiliatarService } from '../service/miliatar.service';

@Component({
  selector: 'app-militar',
  templateUrl: './militar.component.html',
  styleUrls: ['./militar.component.css']
})
export class MilitarComponent implements OnInit {

   public militares = [];
  constructor(private militarService: MiliatarService) { }

  ngOnInit(): void {
    this.listarMilitar()
  }


  listarMilitar(){
         this.militarService.listarTodas().subscribe(data=>{
           this.militares = data
         })
  }
}
