import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Form, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  /* miFormulario:FormGroup = new FormGroup({
    'nombre': new FormControl('RTX4800'),
    'precio': new FormControl(0),
    'existencias': new FormControl(0)
  })*/


  miFormulario: FormGroup = this.fb.group({   // Formulario
    nombre:['',[Validators.required, Validators.minLength(3)]],
    precio:[,[Validators.required, Validators.min(0)]],
    existencias:[,[Validators.required, Validators.min(0)]],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({ // regresa los valores al formulario despues de guardar
      nombre:'RTX4800',
      precio: 1600,
      existencias: 120
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched() // marca como si hubiera tocado todos los campoas para el error
      return
    }
    console.log(this.miFormulario.value);

    this.miFormulario.reset() //limpiar campos del formulario al guardar
    
    
  }



  

}
