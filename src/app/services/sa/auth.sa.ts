import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiSA } from './api.sa';

@Injectable({
  providedIn: 'root'
})
export class AuthSA {

  constructor(private apiSA: ApiSA) { }

  login(email: string, password:string): Observable<any> {
    return this.apiSA.post('/user/login', { email, mdp: password });
  }

  register(email: string, password:string, username: string, status:string): Observable<any> {
    return this.apiSA.post('/user/register', { email, mdp: password, nomprenom:username, status });
  }


}
