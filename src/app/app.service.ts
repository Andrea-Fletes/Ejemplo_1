import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _datos: string;

  constructor() {
    this._datos = '';
  }

  get datos$(): string {
    return this._datos;
  }

  onButtonClick(nuevoDato: string) {
    this._datos = nuevoDato;
  }
}
