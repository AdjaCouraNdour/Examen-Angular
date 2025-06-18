import { PaiementModel } from "./Paiment.model";

export interface DetteModel {
  id: number;
  clientId: number;
  date: string;
  montantDette: number;
  montantPaye: number;
  montantRestant: number;
  paiements?: PaiementModel[]; 
}