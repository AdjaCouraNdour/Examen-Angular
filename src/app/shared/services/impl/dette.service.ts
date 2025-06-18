import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IDetteService } from '../IDetteService';
import { DetteModel } from '../../models/dette.model';
@Injectable({
  providedIn: 'root' 
})
export class DetteService implements IDetteService{

  private apiUrl = 'https://gestion-absence-ism-dev.onrender.com/api/web/absences';
  
    getAllDettes(): Observable<any> {
      return this.httpClient.get<any>(this.apiUrl);
    } 
  
    getDettesByClientId(IdClient: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${IdClient}`);
    } 
    getById(Id: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${Id}`);
    }

    ajouterDette(dette: Partial<DetteModel>): Observable<DetteModel> {
      return this.httpClient.post<DetteModel>(this.apiUrl, dette);
    }


  constructor(private httpClient: HttpClient) { }
  
 
}
