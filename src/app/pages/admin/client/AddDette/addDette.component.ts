import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientModel } from '../../../../shared/models/client.model';
import { ClientService } from '../../../../shared/services/impl/client.service';
import { DetteService } from '../../../../shared/services/impl/dette.service';
import { DetteModel } from '../../../../shared/models/dette.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-Dette',
  templateUrl: './addDette.component.html',
  styleUrls: ['./addDette.component.css'],
  imports: [CommonModule,ReactiveFormsModule],
})
export class AddDetteComponent implements OnInit {
  formDette!: FormGroup;
  clients: ClientModel[] = [];
  loadingClients = true;
  errorLoadingClients = '';
  successMessage = '';
  errorMessage = '';
  loading = false;

  private clientService = inject(ClientService);
  private detteService = inject(DetteService);
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe({
      next: (res) => {
        this.clients = res.results ?? [];
        this.loadingClients = false;
      },
      error: (err) => {
        this.errorLoadingClients = "Erreur lors du chargement des clients";
        this.loadingClients = false;
        console.error(err);
      }
    });

    this.formDette = this.fb.group({
      clientId: ['', Validators.required],
      date: ['', Validators.required],
      montantDette: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit() {
    if (this.formDette.invalid) return;

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const nouvelleDette: Partial<DetteModel> = {
      clientId: this.formDette.value.clientId,
      date: this.formDette.value.date,
      montantDette: this.formDette.value.montantDette,
      montantPaye: 0,
      montantRestant: this.formDette.value.montantDette,
      paiements: [],
    };

    this.detteService.ajouterDette(nouvelleDette).subscribe({
      next: () => {
        this.successMessage = 'Dette ajoutée avec succès !';
        this.formDette.reset();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = "Erreur lors de l'ajout de la dette.";
        this.loading = false;
        console.error(err);
      }
    });
  }
}
