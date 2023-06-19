import { Injectable } from "@angular/core";
import { TOKEN, USER_INFO } from "../data/constants/storage.constants";

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor() { }

  getToken() {
    return JSON.parse(localStorage.getItem(TOKEN));
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem(USER_INFO));
  }

  setUserInfo(userInfo: string) {
    localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }

  removeUserInfo() {
    localStorage.removeItem(USER_INFO);
  }

}
