import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string
  favoritos: Favorito []
}
interface Favorito{
  id:number
  nombre:string
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  
  @ViewChild('miFormulario') miFormularioDinamico!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  nuevoJuego: string = ""

  persona:Persona={
    nombre:'Luis',
    favoritos:[
      {id:1,nombre:'Luis-1'},
      {id:2,nombre:'Luis-2'},
    ]
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
  agregarJuego(){
    const nuevoFavorito:Favorito = {
      id: this.persona.favoritos.length +1,
      nombre: this.nuevoJuego
      
    }
    this.persona.favoritos.push({... nuevoFavorito})
    this.nuevoJuego=""
  }
  guardar(){
    console.log("Formulario posteado");
    
  }

}
