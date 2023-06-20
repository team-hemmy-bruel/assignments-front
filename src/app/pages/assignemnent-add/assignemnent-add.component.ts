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
  matiere = "";
  matieres = [];

  loading = false;


  constructor(private storageService: StorageService, private assignmentSA: AssignmentSA, private router: Router) {
    this.userInfo = this.storageService.getUserInfo();
    this.initial = `https://ui-avatars.com/api/?name=${this.userInfo.nomprenom}&background=F5583D&color=ffffff`;
  }

  ngOnInit() {
    this.getMatieres();
  }

  getMatieres() {
    this.assignmentSA.subjects().subscribe((data) => {
      this.matieres = data.docs;
    })
  }

  addAssignment() {
    this.loading = true;
    const assAdd = {
      auteur: this.storageService.getUserInfo()._id,
      matiere: this.matiere,
      nom: this.nom
    };

    this.assignmentSA.addAssignment(assAdd).subscribe(data => {
      console.log('this. data :>> ', data);
      this.router.navigate(['/dashboard']);
      this.loading = false;
    });
  }



  onSubmit(event: any) {
    console.log('nom :>> ', this.nom);
    console.log('matiere :>> ', this.matiere);

    this.addAssignment();
  }
}
