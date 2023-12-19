import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  mostrarMensaje = false
  registroForm = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("",[Validators.required,Validators.email ]),
    apellido: new FormControl("",[Validators.required,Validators.minLength(4) ]),
    city: new FormControl("",[Validators.required,Validators.minLength(4) ]),
    password: new FormControl("",[Validators.required,Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ])
  })

  get nombre(){
    return this.registroForm.get("nombre")?.value
    
  }

  get apellido(){
    return this.registroForm.get("apellido")?.value
    
  }

  get city(){
    return this.registroForm.get("city")?.value
    
  }
  get email(){
    return this.registroForm.get("email")?.value
    
  }

  get password(){
    return this.registroForm.get("password")?.value
    
  }

  


  enviar(){
    const estadoFormulario = this.registroForm.status
    console.log(estadoFormulario, this.nombre, this.email)
    console.log(this.registroForm)
    this.mostrarMensaje= false
    if (this.registroForm.status=="INVALID" ){

      this.mostrarMensaje = true
    }
  }
}
