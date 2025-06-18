import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ClientsComponent } from './pages/admin/client/clients.component';
import { ClientDettesComponent } from './pages/admin/client/listeDettes/clientDettes.component';
import { PaiementDetteComponent } from './pages/admin/listePaiementDette/paiementDette.component';
import { AddPaiementDetteComponent } from './pages/admin/listePaiementDette/AddPaiement/addPaiementDette.component';
import { SecurityComponent } from './pages/security/security.component';
import { LoginComponent } from './pages/security/login/login.component';
import { AddDetteComponent } from './pages/admin/client/AddDette/AddDette.component';

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
    path: "security",
    component: SecurityComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  }
];
