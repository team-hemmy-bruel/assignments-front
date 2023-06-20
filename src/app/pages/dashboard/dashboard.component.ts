import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentSA } from 'src/app/services/sa/assignement.sa';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page: number = 1;
  limit: number = 100;
  totalPages: number[] = [];
  assignments: [];
  loading = false;
  totalAssignments = 0;

  constructor(private assignmentSA: AssignmentSA, private router: Router,
    ) {

  }

  date(date: string) {
    return new Date(date).toLocaleDateString();
  }

  ngOnInit() {
    this.getListAssignement();
  }

  setPagination(pagination: number) {
    this.page = pagination;
    this.getListAssignement();
  }

  isActive(pagination: number) {
    return pagination === this.page ? 'page-item active' : 'page-item';
  }

  getListAssignement() {
    this.loading = true;
    this.assignmentSA.assignments(this.page, this.limit).subscribe(data => {
      console.log('this. data :>> ',  data);
      this.assignments = data.docs;
      this.totalAssignments = data.totalDocs;
      this.totalPages = Array(data.totalPages).fill(0).map((x, i) => i + 1);
      this.loading = false;
    });
  }

  editAssignment(id: string) {
    this.router.navigate(['/assignment-edit', {id}]);
  }

  deleteAssignment(id: string) {
    this.assignmentSA.deleteAssignment(id).subscribe(data => {
      console.log('Assignement deleted:>> ', data);
      this.getListAssignement();
    })
  }

  addAssignment(id: string) {
    this.router.navigate(['/assignment-add']);
  }

  getAuthor(assignment: any){
    return assignment.auteur_info[0].nomprenom;
  }

  getSubject(assignment: any){
    const image = assignment.matiere_info[0].image
    return `${environment.apiBaseUrlAssets}/${image}`;
  }

}
