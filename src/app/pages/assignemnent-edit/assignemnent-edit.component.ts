import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-assignemnent-edit',
  templateUrl: './assignemnent-edit.component.html',
  styleUrls: ['./assignemnent-edit.component.scss']
})
export class AssignmentEditComponent implements OnInit {

  public userInfo: any;
  public initial: any;

  constructor(private storageService: StorageService) {
    this.userInfo = this.storageService.getUserInfo();
    this.initial = `https://ui-avatars.com/api/?name=${this.userInfo.nomprenom}&background=F5583D&color=ffffff`;
  }

  ngOnInit() {
  }

}
