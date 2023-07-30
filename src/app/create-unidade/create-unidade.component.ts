import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeService } from '../service/unidade.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-unidade',
  templateUrl: './create-unidade.component.html',
  styleUrls: ['./create-unidade.component.css']
})
export class CreateUnidadeComponent implements OnInit {

  @Output() private loadList = new EventEmitter<any> ();
  simpleForm: FormGroup= new FormGroup({
    designacao: new FormControl('', Validators.required)
  })
  constructor(private unidadeService: UnidadeService, private toastService: ToastrService) { }

  ngOnInit(): void {
  }


  get f() {
    return this.simpleForm.controls
  }

   public submit(){
    if(this.simpleForm.invalid){
      this.toastService.error("designação não pode estar Vazio")
       return
    }

    this.unidadeService.criar(this.simpleForm.value).subscribe((response)=>{
      this.simpleForm.reset()
      this.toastService.success("Unidade criado com sucesso", 'sucessso')
      this.loadList.emit(response)
    })

    
   }

}
