import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Link {
  name: String;
  path: String;
  class: String,
  subLinks?: Array<Link>,
  isVisible: boolean
}

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  protected links: Link[] = []

  ngOnInit(): void {
    this.links = [
      { name: 'Clients', path: '/clients', class: "nav-item", isVisible: true },
      { name: 'Dettes', path: '/dettes', class: "nav-item", isVisible: true },
    ]
  }
}
