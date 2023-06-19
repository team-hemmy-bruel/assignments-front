import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { StorageService } from './storage.service';

export const authGuard: CanActivateFn = (route, state, ) => {

  let storageService = inject(StorageService);
  let router = inject(Router);

  if (storageService.getToken()) {
    router.navigate(["/dashboard"]);
    return true;
  }
  else {
    router.navigate(["/login"]);
    return false;
  }

};
