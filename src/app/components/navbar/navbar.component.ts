import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthBdl } from 'src/app/services/bdl/auth.bdl';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public userInfo: any;
  public initial: any;

  constructor(location: Location, private element: ElementRef,
    private router: Router, private authBdl: AuthBdl,
    private storageService: StorageService) {
    this.location = location;
    }

  ngOnInit() {
    this.userInfo = this.storageService.getUserInfo();
    this.initial = `https://ui-avatars.com/api/?name=${this.userInfo?.nomprenom}&background=F5583D&color=ffffff`;
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  getTitle() {
    return 'Dashboard';
  }

  logout() {
    this.authBdl.logout();
    this.router.navigate(['/login']);
  }

}
