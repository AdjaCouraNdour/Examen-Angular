import { Injectable } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { Observable, of } from 'rxjs';

export interface IClientService {
    
    getAllClients(): Observable<ClientModel[]> ;
    getById(Id: number): Observable<ClientModel> ;
    // getListeAbsences(ClientId: number): Observable<ClientModel> ;

    
}
