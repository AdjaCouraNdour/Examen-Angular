import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IDetteService } from '../IDetteService';
import { DetteModel } from '../../models/dette.model';
@Injectable({
  providedIn: 'root' 
})
export class DetteService implements IDetteService{

private apiUrl = 'http://localhost:3000/dettes';
  
    getAllDettes(): Observable<any> {
      return this.httpClient.get<any>(this.apiUrl);
    } 
 
    getDettesByClientId(IdClient: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}?clientId=${IdClient}`);
    }

    getById(Id: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${Id}`);
    }

    ajouterDette(dette: Partial<DetteModel>): Observable<DetteModel> {
      return this.httpClient.post<DetteModel>(this.apiUrl, dette);
    }


  constructor(private httpClient: HttpClient) { }
  
 
}
