import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Metal Gear', Validators.required],
      ['Luis',Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray

  }

  constructor(private fb:FormBuilder) { }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched() // marca como si hubiera tocado todos los campoas para el error
      return
    }
    console.log(this.miFormulario.value);

    this.miFormulario.reset() //limpiar campos del formulario al guardar
    
    
  }

  validarCampo(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) { return; }
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  borrar(id: number){
    this.favoritosArr.removeAt(id)
  }

  

}
