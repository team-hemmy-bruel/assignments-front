import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiSA } from './api.sa';

@Injectable({
  providedIn: 'root'
})
export class AssignmentSA {

  constructor(private apiSA: ApiSA) { }

  assignments(page: number, limit: number): Observable<any> {
    return this.apiSA.get(`/assignments?page=${page}&limit=${limit}`);
  }

  addAssignment(nom: string, dateDeRendu: Date, auteur: string, matiere: string, note: number, remarques: string): Observable<any> {
    return this.apiSA.post(`/assignments`, { nom, dateDeRendu, auteur, matiere, note, remarques });
  }

  detailAssignment(id: string): Observable<any> {
    return this.apiSA.get(`/assignments/${id}`);
  }

  // editAssignment(id: string): Observable<any> {
  //   return this.apiSA.put(`/assignments/${id}`);
  // }

  deleteAssignment(id: string): Observable<any> {
    return this.apiSA.delete(`/assignments/${id}`);
  }
}
