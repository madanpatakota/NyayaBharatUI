// layout.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class LayoutComponent { }
