import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GrauParentescoService } from '../service/grau-parentesco.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-grau-parentesco',
  templateUrl: './create-grau-parentesco.component.html',
  styleUrls: ['./create-grau-parentesco.component.css']
})
export class CreateGrauParentescoComponent implements OnInit {

  @Output() private loadList = new EventEmitter<any> ();
  simpleForm: FormGroup= new FormGroup({
    designacao: new FormControl('', Validators.required)
  })
  constructor(private grauService: GrauParentescoService, private toastService: ToastrService) { }

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

    this.grauService.criar(this.simpleForm.value).subscribe((response)=>{
      this.simpleForm.reset()
      this.toastService.success("Grau Parentesco Criado ", 'sucessso')
      this.loadList.emit(response)
    })

    
   }
}
