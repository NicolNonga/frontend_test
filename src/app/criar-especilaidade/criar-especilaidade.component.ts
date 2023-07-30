import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EspeicalidadeService } from '../espeicalidade.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-criar-especilaidade',
  templateUrl: './criar-especilaidade.component.html',
  styleUrls: ['./criar-especilaidade.component.css']
})
export class CriarEspecilaidadeComponent implements OnInit {
  @Output() private loadList = new EventEmitter<any>();
  simpleForm: FormGroup= new FormGroup({
    designacao: new FormControl('', Validators.required)
  })
  constructor(private especialidadeService: EspeicalidadeService, private toastService: ToastrService) { }

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

    this.especialidadeService.criarEspecialidade(this.simpleForm.value).subscribe((response)=>{
      this.simpleForm.reset()
      this.toastService.success("especidade criado com sucesso", 'sucessso')
      this.loadList.emit(response)
    })

    
   }
}
