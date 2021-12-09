import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  
  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm={
    producto:'ABC',
    precio:10,
    existencia:10
  }

  constructor() { }

  ngOnInit(): void {

  }
  /*guardar(miformulario:NgForm){
    console.log("Submit hecho ", miformulario);
    
  }*/

  nombreValido(): boolean {
    return this.miFormulario?.controls.producto?.invalid 
            && this.miFormulario?.controls.producto?.touched;
  }
  precioValido(): boolean {
    return this.miFormulario?.controls.precio?.invalid 
            && this.miFormulario?.controls.precio?.touched;
  }

  guardar(){
    console.log(this.miFormulario);
    console.log('Posteo exitoso');
    this.miFormulario.resetForm({
      precio:0,
      existencia:0
    });
    
  }
  
}
