import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  constructor(private _appService: AppService) {
    console.log('dentro del constructor');
  }

  get _datos$(): string {
    return this._appService.datos$;
  }

  ngOnInit() {
    console.log('dentro de ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('dentro de afterContentInit');
  }

  ngAfterViewInit() {
    console.log('dentro de ngAfterViewInit');
  }

  mostrarDatos() {
    this._appService.onButtonClick('ha dado click en el boton');
  }
}
