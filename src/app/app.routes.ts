import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/client/clients.component';
import { ClientDettesComponent } from './pages/client/listeDettes/clientDettes.component';
import { AddDetteComponent } from './pages/client/addDette/addDette.component';
import { PaiementDetteComponent } from './pages/client/listePaiementDette/paiementDette.component';
import { AddPaiementDetteComponent } from './pages/client/AddPaiement/addPaiementDette.component';

export const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
    children: [
      { path: '', component: ClientsComponent }, 
      { path: 'client/:clientId/dettes', component: ClientDettesComponent },
      { path: 'client/:clientId/AddDette', component: AddDetteComponent },
      { path: 'client/:clientId/dette/:detteId/paiements', component: PaiementDetteComponent },
      { path: 'dette/:detteId/AddPaiment', component: AddPaiementDetteComponent },
    ]
  },
  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full'
  }
];
