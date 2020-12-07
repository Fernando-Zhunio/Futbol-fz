import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister:FormGroup = new FormGroup({
    name:new FormControl(null,Validators.required),
    birthday:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required),
  })

  hide = true;
  constructor(private spinner:NgxSpinnerService,private auth_service:AuthService) { }

  ngOnInit() {
  }

  registrarse():void{
    if(this.formRegister.valid){
      this.spinner.show();
      const name = this.formRegister.controls['name'].value;
      const email = this.formRegister.controls['email'].value;
      const birthday = this.formRegister.controls['birthday'].value;
      const password = this.formRegister.controls['password'].value;
      console.log(birthday);
      
      this.auth_service.register(name,email,password,birthday).subscribe(res=>{
        console.log(res);
      this.spinner.hide();
      
    },error=>{
      console.log(error)
      this.spinner.hide();
      
      })
      console.log(this.formRegister.valid);


    }
    

  }

}
