import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaiementModel } from '../../models/Paiment.model';
import { IPaiementService } from '../IPaiementService';

@Injectable({
  providedIn: 'root' 
})
export class PaiementService implements IPaiementService{

  private apiUrl = 'https://gestion-absence-ism-dev.onrender.com/api/web/Paiements';                        
    
    getAllPaiements(): Observable<any> {
      return this.httpClient.get<any>(this.apiUrl);
    }
    getById(Id: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${Id}`);
    }
  constructor(private httpClient: HttpClient) { }
  getByDetteId(detteId: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${detteId}`);
  }
 
   ajouterPaiement(paiement: Partial<PaiementModel>): Observable<PaiementModel> {
    return this.httpClient.post<PaiementModel>(this.apiUrl, paiement);
  }
}
