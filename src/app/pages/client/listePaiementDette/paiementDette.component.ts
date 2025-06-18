import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaiementModel } from '../../../shared/models/Paiment.model';
import { PaiementService } from '../../../shared/services/impl/Paiement.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paiemen-dette',
  templateUrl: './paiementDette.component.html',
  styleUrls: ['./paiementDette.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PaiementDetteComponent implements OnInit {
  paiements: PaiementModel[] = [];
  detteId!: number;

  private paiementService = inject(PaiementService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    this.detteId = Number(this.route.snapshot.paramMap.get('detteId'));
    this.chargerPaiementsParDetteId(this.detteId);
  }

  ajouterPaiement() {
    this.router.navigate(['/dette', this.detteId, 'addPaiement']);
  }

  private chargerPaiementsParDetteId(detteId: number): void {
    this.paiementService.getByDetteId(detteId).subscribe({
      next: (response) => {
        this.paiements = response.results ?? [];
        console.log('Paiements chargés :', this.paiements);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des paiements :', err);
      }
    });
  }
}
