import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PaiementModel } from '../models/Paiment.model';

export interface IPaiementService {
    getAllPaiements(): Observable<PaiementModel> ;
    getById(Id: number): Observable<PaiementModel> ;
    getByDetteId(detteId: number): Observable<PaiementModel> ;
    ajouterPaiement(paiement: Partial<PaiementModel>): Observable<PaiementModel> ;

}
