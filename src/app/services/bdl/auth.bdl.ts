import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSA } from '../sa/auth.sa';
import { StorageService } from '../storage.service';
import { UserBdl } from './user.bdl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthBdl {

  constructor(private auhtSA: AuthSA, private storageService: StorageService,
    private router: Router, private userBdl: UserBdl) { }

  login(email: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
      this.auhtSA.login(email, password).subscribe(data => {
        if (data.auth) {
          this.storageService.setToken(data.token);
          this.userBdl.me();
          console.log('connected :>> ');
          this.router.navigate(['/dashboard']);
          observer.next(true); // emit true to indicate success
        }
        else {
          console.log('auth incorrect :>> ');
          this.router.navigate(['/login']);
          observer.next(false); // emit false to indicate failure
        }

        observer.complete(); // complete the Observable
      });
    });
  }

  logout() {
    this.storageService.removeToken();
    this.storageService.removeUserInfo();
  }
}
