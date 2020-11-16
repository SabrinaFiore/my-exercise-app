import { Component } from '@angular/core';

// decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// cada componente tiene su  classe de ts
export class AppComponent {
  title = 'my-exercise-app';
}
