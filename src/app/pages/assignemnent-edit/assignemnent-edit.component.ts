import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentSA } from 'src/app/services/sa/assignement.sa';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assignemnent-edit',
  templateUrl: './assignemnent-edit.component.html',
  styleUrls: ['./assignemnent-edit.component.scss']
})
export class AssignmentEditComponent implements OnInit {

  public userInfo: any;
  public initial: any;

  assignment: any;
  remarques = "";
  note = 0;
  idAssignment = "";
  matieres = [];
  matiere = "";
  author_info: any;
  subject_info: any;

  loading = false;


  constructor(private storageService: StorageService, private assignmentSA: AssignmentSA, private router: Router
    , private route: ActivatedRoute) {
    this.userInfo = this.storageService.getUserInfo();
    this.initial = `https://ui-avatars.com/api/?name=${this.userInfo.nomprenom}&background=F5583D&color=ffffff`;
  }

  ngOnInit() {
    this.idAssignment = this.route.snapshot.paramMap.get('id');
    this.getDetailAssignement();
  }

  date(date: string) {
    return new Date(date).toLocaleDateString();
  }

  getImage(image: string) {
    return `${environment.apiBaseUrlAssets}/${image}`;
  }

  getDetailAssignement() {
    this.loading = true;
    console.log('idAssignment :>> ', this.idAssignment);
    this.assignmentSA.detailAssignment(this.idAssignment).subscribe(data => {
      console.log(' data>> ', data);
      this.assignment = data;
      this.author_info = data.auteur_info[0];
      this.subject_info = data.matiere_info[0];
      this.remarques = data.remarques;
      this.note = data.note;
      this.loading = false;
    });
  }

  deleteAssignment() {
    this.assignmentSA.deleteAssignment(this.idAssignment).subscribe(data => {
      console.log('Assignement deleted:>> ', data);
      this.router.navigate(['/dashboard']);
    })
  }

  editAssignment() {
    const assEdit = {
      id: this.idAssignment,
      remarques: this.remarques,
      note: this.note
    };
    console.log('assEdit :>> ', assEdit);
    this.assignmentSA.editAssignment(assEdit).subscribe(data => {
      console.log('Assignement edit :>> ', data);
      this.getDetailAssignement();
    })
  }

}
