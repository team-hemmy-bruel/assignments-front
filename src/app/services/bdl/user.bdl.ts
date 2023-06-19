import { Injectable } from '@angular/core';
import { UserSA } from '../sa/user.sa';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})

export class UserBdl {

  constructor(private userSA: UserSA, private storageService: StorageService) { }

  me() {
    this.userSA.me().subscribe(data => {
      if(data) {
        this.storageService.setUserInfo(data);
      }
    });
  }

}
