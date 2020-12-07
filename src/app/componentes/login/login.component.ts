import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth_service:AuthService) { }

  formLogin:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required),
  })
  hide = true;


  ngOnInit() {
  }

  protected login():void{
    if(this.formLogin.valid){
      let email = this.formLogin.controls['email'].value;
      let password = this.formLogin.controls['password'].value;
      this.auth_service.login(email,password).subscribe(res=>{
        console.log(res);       
      },errors=>console.log('hoal',errors))
    }
  }

}
