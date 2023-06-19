import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSA } from '../sa/auth.sa';
import { StorageService } from '../storage.service';
import { UserBdl } from './user.bdl';

@Injectable({
  providedIn: 'root'
})

export class AuthBdl {

  constructor(private auhtSA: AuthSA, private storageService: StorageService,
    private router: Router, private userBdl: UserBdl) { }

  login(email: string, password: string) {
    this.auhtSA.login(email, password).subscribe(data => {
      if (data.auth) {
        this.storageService.setToken(data.token);
        this.userBdl.me();
        console.log('connected :>> ');
        this.router.navigate(['/dashboard']);
      }
      else {
        console.log('auth incorrect :>> ');
        this.router.navigate(['/login']);
      }
    });
  }
}
