import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientsComponent } from './pages/admin/client/clients.component';
import { ClientDettesComponent } from './pages/admin/client/listeDettes/clientDettes.component';
import { PaiementDetteComponent } from './pages/admin/listePaiementDette/paiementDette.component';
import { AddPaiementDetteComponent } from './pages/admin/listePaiementDette/AddPaiement/addPaiementDette.component';
import { AddDetteComponent } from './pages/admin/client/addDette/AddDette.component';
export const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: 'clients', component: ClientsComponent },
      { path: 'client/:clientId/dettes', component: ClientDettesComponent },
      { path: 'client/:clientId/AddDette', component: AddDetteComponent },
      { path: 'client/:clientId/dette/:detteId/paiements', component: PaiementDetteComponent },
      { path: 'dette/:detteId/AddPaiment', component: AddPaiementDetteComponent },
    ]
  },
    {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];
