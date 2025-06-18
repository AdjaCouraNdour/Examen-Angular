import { Component, Input} from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ClientModel } from '../../shared/models/client.model';

@Component({
  selector: 'app-client',
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent {
  @Input({
    alias : "Client", 
    required: true
  }) Client!: ClientModel;

  constructor(private router : Router ) {
  }

  Client$:Observable<ClientModel[]> = new Observable();
  protected readonly Array = Array;
}

