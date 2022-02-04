import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
//Creamos una interfaz para implementarla en los trabajadores
export interface Trabajador {
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string;
  departamento: string;
}

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  //Creamos una propiedad que guardará trabajadores
  private trabajadores: Trabajador[];
  //Creamos el subject que emitirá el evento
  private trabajadores$: Subject<Trabajador[]>;

  constructor() {
    //Inicializamos las variables
    this.trabajadores = [];
    this.trabajadores$ = new Subject();
  }
  //Creamos un método que añada trabajadores al array y que escuche los cambios que se producen para añadir esos trabajadores
  addTrabajador(tTrabajador: Trabajador) {
    this.trabajadores.push(tTrabajador);
    this.trabajadores$.next(this.trabajadores);
  }

  //Como son variables privadas creamos un getter para poder obtenerlos desde fuera  y esto devuelve un observable

  getTrabajador(): Observable<Trabajador[]> {
    return this.trabajadores$.asObservable();
  }
}
