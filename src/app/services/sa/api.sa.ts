import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSA {

  constructor(private http: HttpClient, private storageService: StorageService) {

  }

  getHeaders(): HttpHeaders {
    const headerToken = this.storageService.getToken() ? { 'x-access-token': this.storageService.getToken() } : {};
    return new HttpHeaders({
      ...headerToken
    });
  }

  get(url: string) {
    return this.http.get(`${environment.apiBaseUrl}${url}`, { headers: this.getHeaders() });
  }

  post(url: string, body: any) {
    return this.http.post(`${environment.apiBaseUrl}${url}`, body, { headers: this.getHeaders()});
  }

  put(url: string, body: any) {
    return this.http.put(`${environment.apiBaseUrl}${url}`, body, { headers:  this.getHeaders() });
  }

  delete(url: string) {
    return this.http.delete(`${environment.apiBaseUrl}${url}`, { headers: this.getHeaders() });
  }

}
