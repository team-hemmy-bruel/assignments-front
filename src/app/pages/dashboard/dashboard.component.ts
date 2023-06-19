import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AssignmentSA } from 'src/app/services/sa/assignement.sa';

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

  constructor(private assignmentSA: AssignmentSA) {

  }

  ngOnInit() {
    this.getAssignment();
  }

  setPagination(pagination: number) {
    this.page = pagination;
    this.getAssignment();
  }

  isActive(pagination: number) {
    return pagination === this.page ? 'page-item active' : 'page-item';
  }

  getAssignment() {
    this.loading = true;
    this.assignmentSA.assignments(this.page, this.limit).subscribe(data => {
      console.log('this. data :>> ',  data);
      this.assignments = data.docs;
      this.totalPages = Array(data.totalPages).fill(0).map((x, i) => i + 1);
      this.loading = false;
    });
  }

}
