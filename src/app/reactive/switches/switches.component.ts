import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero:['M', Validators.required],
    notificaciones:[false, Validators.required],
    condiciones:[false, Validators.requiredTrue],
  })

  persona={
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      ...this.persona,
      condiciones:false
    })

    this.miFormulario.valueChanges.subscribe(({condiciones, ...restoDeArgumentos}) => { // para extraer y no mandar las condiciones
      this.persona =  restoDeArgumentos
      
    })
  }

  guardar(){
    const forValue = {...this.miFormulario.value};
    delete forValue.condiciones
    this.persona = forValue
    console.log(forValue);
    
  }

}
