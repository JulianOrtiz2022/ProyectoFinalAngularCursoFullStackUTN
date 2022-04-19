import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myFormLogin:FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:AuthService
    ) {
      this.myFormLogin = this.fb.group({
        email:["",[Validators.required]],
        clave:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
      })
     }
     registrarseLogin(){
      console.log(this.myFormLogin.value)
     }
  ngOnInit(): void {
  }
   login(){
    this.auth.authenticate()
   }
}
