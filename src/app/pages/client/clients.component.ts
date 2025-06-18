import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientModel } from '../../shared/models/client.model';
import { ClientService } from '../../shared/services/impl/client.service';


@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './client.component.css'
})
export class ClientsComponent implements OnInit {
  private clientsService: ClientService = inject(ClientService);
  private router = inject(Router);

  clientsAll: ClientModel[] = [];
  clientsPerPage: ClientModel[] = [];

  currentPage = 0;
  pageSize = 4;
  pages: number[] = [];

  ngOnInit(): void {
    this.clientsService.getAllClients()
      .pipe(map(res => res.results))
      .subscribe((data: ClientModel[]) => {
        this.clientsAll = data;
        this.setupPagination();
        this.goToPage(0);
      });
  }

  voirDetails(clientId: number) {
    this.router.navigate(['/admin/client', clientId]);
  }

  setupPagination() {
    const totalPages = Math.ceil(this.clientsAll.length / this.pageSize);
    this.pages = Array.from({ length: totalPages }, (_, i) => i);
  }

  goToPage(page: number) {
    if (page < 0 || page >= this.pages.length) return;
    this.currentPage = page;
    const start = page * this.pageSize;
    const end = start + this.pageSize;
    this.clientsPerPage = this.clientsAll.slice(start, end);
  }
}
