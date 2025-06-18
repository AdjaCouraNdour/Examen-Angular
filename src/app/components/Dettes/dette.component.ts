import { Component, Input} from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DetteModel } from '../../shared/models/dette.model';

@Component({
  selector: 'app-Dette',
  imports: [],
  templateUrl: './dette.component.html',
  styleUrl: './dette.component.css'
})

export class DetteComponent {

  @Input({
    alias : "Dette", 
    required: true
  }) Dette!: DetteModel;

  constructor(private router : Router ) {
  }

  Dette$:Observable<DetteModel[]> = new Observable();

  protected readonly Array = Array;

}

