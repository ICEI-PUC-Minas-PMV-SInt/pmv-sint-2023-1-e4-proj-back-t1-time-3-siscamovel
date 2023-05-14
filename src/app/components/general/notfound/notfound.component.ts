import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  constructor(private location: Location) {}

  voltarParaAPaginaAnterior(): void {
    this.location.back();
  }
}
