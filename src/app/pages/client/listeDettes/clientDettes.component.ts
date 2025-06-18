import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientModel } from '../../../shared/models/client.model';
import { DetteModel } from '../../../shared/models/dette.model';
import { ClientService } from '../../../shared/services/impl/client.service';
import { DetteService } from '../../../shared/services/impl/dette.service';



@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientDettes.component.html',
  styleUrl: './clientDettes.component.css'
})
export class ClientDettesComponent implements OnInit {
  private clientsService = inject(ClientService);
  private dettesService = inject(DetteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  dettesAll: DetteModel[] = [];
  dettesPerPage: DetteModel[] = [];
  client: ClientModel | null = null;
  clientId!: number;

  currentPage = 0;
  pageSize = 4;
  pages: number[] = [];

  loading = true;
  loaded = { client: false, dettes: false };

  ngOnInit(): void {
    this.clientId = Number(this.route.snapshot.paramMap.get('clientId'));

    this.chargerclient(this.clientId);
    this.chargerDettes(this.clientId);
  }

  private chargerclient(id: number) {
    this.clientsService.getById(id).subscribe({
      next: (data) => {
        this.client = data?.results;
        console.log('Étudiant chargé :', this.client);
        this.loaded.client = true;
        this.checkLoading();
      },
      error: (err) => {
        console.error("Erreur lors du chargement de l'étudiant :", err);
        this.loaded.client = true;
        this.checkLoading();
      }
    });
  }

  private chargerDettes(id: number) {
    this.dettesService.getDettesByClientId(id).subscribe({
      next: (response) => {
        this.dettesAll = response.results ;
        console.log("dettes récupérées :", this.dettesAll);
        this.setupPagination();
        this.goToPage(0);
        this.loaded.dettes = true;
        this.checkLoading();
      },
      error: (err) => {
        console.error("Erreur lors du chargement des dettes :", err);
        this.loaded.dettes = true;
        this.checkLoading();
      }
    });
  }

  private checkLoading() {
    if (this.loaded.client && this.loaded.dettes) {
      this.loading = false;
    }
  }

  voirDetails(detteId: number, sessionId:number) {
    this.router.navigate(['/admin/client', this.clientId, 'dette', detteId,'session',sessionId, 'justification']);
  }

  setupPagination() {
    const totalPages = Math.ceil(this.dettesAll.length / this.pageSize);
    this.pages = Array.from({ length: totalPages }, (_, i) => i);
  }

  goToPage(page: number) {
    if (page < 0 || page >= this.pages.length) return;
    this.currentPage = page;
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    this.dettesPerPage = this.dettesAll.slice(start, end);
  }
}
