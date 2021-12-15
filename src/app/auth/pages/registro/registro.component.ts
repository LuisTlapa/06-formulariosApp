import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { emailPattern, nombreApellifoPatterns, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorsService } from '../../../shared/validator/email-validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellifoPatterns)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidator]],
    username:['',[Validators.required, noPuedeSerStrider]],
    password:['',[Validators.required, Validators.minLength(6)]],
    confirmpassword:['',[Validators.required]]
  },
  {
    validators:[this.validatorService.camposIguales('password', 'confirmpassword')]
  })

  //emailError:string = ''
  get emailError():string{
    const errors = this.miFormulario.get('email')?.errors
    if(errors?.required){
      return 'Email es obligatorio'
    }else if (errors?.pattern){
      return 'El valor ingresado no tiene formato de correo'
    }else if(errors?.emailTomado){
      return 'El valor ya esta registrado'

    }
    return ''
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator:EmailValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Luis Tlapa',
      email:'tlapapollo@gmail.com',
      username:'LuisTlapa',
      password: '123456',
      confirmpassword:'123456'
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  /*emailRequired(){
    return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;

  }
  emailformat(){
    return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;

  }
  emailTomado(){
    return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;

  }*/



  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAsTouched();
    
  }

}
