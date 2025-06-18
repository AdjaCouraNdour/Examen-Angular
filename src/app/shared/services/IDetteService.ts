import { Observable } from 'rxjs';
import { DetteModel } from '../models/dette.model';

export interface IDetteService {
       
     getAllDettes(): Observable<DetteModel[]> ;
     getDettesByClientId(IdClient: number): Observable<DetteModel> ;
     getById(Id: number): Observable<DetteModel> ;
     ajouterDette(dette: Partial<DetteModel>): Observable<DetteModel> ;
}
