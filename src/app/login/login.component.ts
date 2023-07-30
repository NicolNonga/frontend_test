import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../service/login-service.service';
import { Ng2IzitoastService } from 'ng2-izitoast'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup
  returnUrl: string;


  constructor(
    public formBuilder: FormBuilder,
    private authServe : LoginServiceService,
    private notifyService: Ng2IzitoastService,
    private toastr: ToastrService,
    private router : Router,
    private route: ActivatedRoute,
    ) { 
    this.createForm();

  }

  ngOnInit(): void {
    if(this.authServe.isAuthenticated()){
      // this.router.navigate(['/home'])
   }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }
  createForm(){
    this.loginForm= this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

   public autenticate() {
      if(this.loginForm.invalid) {
        return
      }

       this.authServe.login(this.loginForm.value).subscribe(data=>{
        this.authServe.setvalueToStore(data)
         console.log(data)
        this.toastr.success('Login Feito Com sucesso', 'Successo');
       window.location.replace(this.returnUrl);

       }, (err)=>{

        this.toastr.error(err.error?.message, "Falha")
       })


   }
}
