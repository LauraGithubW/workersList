import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrabajadoresService } from '../trabajadores.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  //Creamos un nuevo formulario
  formulario: any;
  //Inyectamos el servicio que hemos creado para añadir trabajadores
  constructor(private trabajadoresService: TrabajadoresService) {
    //Inicializamos el formulario creando los controles que se vincularán a los inputs del formulario
  }
  emailPattern: RegExp =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  phonePattern: RegExp = /[0-9]{9}/i;

  ngOnInit(): void {
    //Creamos un nuevo formulario con FormGroup y cada campo con FormControl y sus correspondientes validaciones , patrones, etc
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [
        Validators.required,
        Validators.pattern(this.phonePattern),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.emailPattern),
      ]),
      departamento: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  //Creamos el evento que le asignamos al formulario cuando se envíe y que hacemos que use el servicio con el observable  para recibir los datos de los trabajadores y que se añadan al array de trabajadores del servicio
  onSubmit() {
    if (this.formulario.valid) {
      this.trabajadoresService.addTrabajador(this.formulario.value);

      this.formulario.reset();
    } else {
      this.formulario.invalid;
    }
  }
}
