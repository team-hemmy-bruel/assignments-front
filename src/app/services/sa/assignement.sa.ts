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

}
