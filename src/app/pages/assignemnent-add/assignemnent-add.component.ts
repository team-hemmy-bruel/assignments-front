import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentSA } from 'src/app/services/sa/assignement.sa';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-assignemnent-add',
  templateUrl: './assignemnent-add.component.html',
  styleUrls: ['./assignemnent-add.component.scss']
})
export class AssignmentAddComponent implements OnInit {

  public userInfo: any;
  public initial: any;


  nom = "";
  dateDeRendu = new Date();
  auteur = "";
  matiere = "";
  note = 0;
  remarques = "";

  loading = false;


  constructor(private storageService: StorageService, private assignmentSA: AssignmentSA, private router: Router) {
    this.userInfo = this.storageService.getUserInfo();
    this.initial = `https://ui-avatars.com/api/?name=${this.userInfo.nomprenom}&background=F5583D&color=ffffff`;
  }

  ngOnInit() {
  }



  addAssignment() {
    this.loading = true;
    this.assignmentSA.addAssignment(this.nom, this.dateDeRendu, this.auteur, this.matiere, this.note, this.remarques).subscribe(data => {
      console.log('this. data :>> ', data);
      this.router.navigate(['/dashboard']);
      this.loading = false;
    });
  }



  onSubmit(event: any) {
    console.log('nom :>> ', this.nom);
    console.log('dateDeRendu :>> ', this.dateDeRendu);
    console.log('auteur :>> ', this.auteur);
    console.log('matiere :>> ', this.matiere);
    console.log('note :>> ', this.note);
    console.log('remarques :>> ', this.remarques);
    this.addAssignment();
  }
}
