import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private fb:FormBuilder
    ) { 
    this.myForm = this.fb.group({
      // propiedades del objeto
      nombre:["",[Validators.required]],// validators required
      apellido:["",[Validators.required]], // significa campo obligatorio
      email:["",[Validators.required]],
      clave:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      telefono:["", [Validators.required]]
      //validators.minlength significa que minimo 6 caracteres de clave
    })
  }
  registrarse(){
    console.log(this.myForm.value) 
    // value guarda las propiedades del objetos 
    // y sus "respuestas"
  }
  ngOnInit(): void {
  }

}
