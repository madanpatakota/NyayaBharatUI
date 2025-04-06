import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ Add this line
  template: '<router-outlet></router-outlet>'
})
export class AppComponent { }
