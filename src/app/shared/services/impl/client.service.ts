import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { IClientService } from '../IClientService';

@Injectable({
  providedIn: 'root'
})
export class ClientService implements IClientService {

private apiUrl = 'http://localhost:3000/clients';

    getAllClients(page = 0, size = 5): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}?page=${page}&size=${size}`);
    }
    getById(Id: number): Observable<any> {
      return this.httpClient.get<any>(`${this.apiUrl}/${Id}`);
    }
   
    
  constructor(private httpClient: HttpClient) { }
}
