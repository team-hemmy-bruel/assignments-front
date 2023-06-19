import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiSA } from './api.sa';

@Injectable({
  providedIn: 'root'
})
export class UserSA {

  constructor(private apiSA: ApiSA) { }

  me(): Observable<any> {
    return this.apiSA.get(`/user/me`);
  }

}
