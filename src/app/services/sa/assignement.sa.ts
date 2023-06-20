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
    return this.apiSA.get(`/assignmentslibs/-1?page=${page}&limit=${limit}`);
  }

  subjects(): Observable<any> {
    return this.apiSA.get(`/matieres`);
  }

  addAssignment(data: any): Observable<any> {
    return this.apiSA.post(`/assignments`, data);
  }

  detailAssignment(id: string): Observable<any> {
    return this.apiSA.get(`/assignmentslib/${id}`);
  }

  editAssignment(data: any): Observable<any> {
    return this.apiSA.put(`/rendu`, data);
  }

  deleteAssignment(id: string): Observable<any> {
    return this.apiSA.delete(`/assignments/${id}`);
  }
}
