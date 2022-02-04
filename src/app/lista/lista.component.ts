import { Component, OnInit } from '@angular/core';
import { Trabajador, TrabajadoresService } from '../trabajadores.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  //Crramos un array que implemente la interfaz trabajador
  arrayTrabajadores: Trabajador[];
  //Inyectamos el servicio para obtener los trabajadores que creamos en el formulario
  constructor(private trabajadoresService: TrabajadoresService) {
    this.arrayTrabajadores = [];
  }

  ngOnInit(): void {
    //Guardamos en la variable arrayTrabajadores los trabajadores que obtenemos a través del servicio y el formulario y así se comunican los componentes
    this.trabajadoresService.getTrabajador().subscribe((trabajadores) => {
      this.arrayTrabajadores = trabajadores;
    });
  }
}
