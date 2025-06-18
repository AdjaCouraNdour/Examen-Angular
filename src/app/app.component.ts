import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./shared/components/nav/nav/nav.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular';
  currentTitle = 'client';

  constructor(public router: Router) {}

}