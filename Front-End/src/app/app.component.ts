import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End';
  matos = false

  onClick() {
    this.matos = !this.matos;
    console.log('2 foi clikado');
  }

  onHome() {
    this.matos = !this.matos;
    console.log('onHome link foi clikado');
  }
}


