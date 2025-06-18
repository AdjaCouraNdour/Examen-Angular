import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaiementService } from '../../../../shared/services/impl/Paiement.service';
import { PaiementModel } from '../../../../shared/models/Paiment.model';


@Component({
  selector: 'app-add-paiement',
  templateUrl: './add-paiement-dette.component.html',
  styleUrls: ['./add-paiement-dette.component.css'],
})
export class AddPaiementDetteComponent implements OnInit {
  formPaiement!: FormGroup;
  detteId!: number;

  loading = false;
  errorMessage = '';
  successMessage = '';

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private paiementService = inject(PaiementService);

  ngOnInit(): void {
    // Récupérer l'id de la dette dans l'URL
    this.detteId = Number(this.route.snapshot.paramMap.get('detteId'));

    this.formPaiement = this.fb.group({
      montant: [0, [Validators.required, Validators.min(0.01)]],
      date: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formPaiement.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const nouveauPaiement: Partial<PaiementModel> = {
      detteId: this.detteId,
      montant: this.formPaiement.value.montant,
      date: this.formPaiement.value.date,
    };

    this.paiementService.ajouterPaiement(nouveauPaiement).subscribe({
      next: () => {
        this.successMessage = 'Paiement ajouté avec succès !';
        this.formPaiement.reset();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de l’ajout du paiement.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
