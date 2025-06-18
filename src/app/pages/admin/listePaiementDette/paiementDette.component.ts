import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaiementModel } from '../../../shared/models/Paiment.model';
import { PaiementService } from '../../../shared/services/impl/Paiement.service';


@Component({
  selector: 'app-paiement-dette',
  templateUrl: './paiement-dette.component.html',
  styleUrls: ['./paiement-dette.component.css'],
})
export class PaiementDetteComponent implements OnInit {
  paiements: PaiementModel[] = [];
  detteId!: number;

  private paiementService = inject(PaiementService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.detteId = Number(this.route.snapshot.paramMap.get('detteId'));
    this.chargerPaiementsParDetteId(this.detteId);
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
