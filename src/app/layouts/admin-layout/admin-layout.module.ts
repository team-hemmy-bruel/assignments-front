import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InitialComponent } from 'src/app/components/initial/initial.component';
import { AssignmentEditComponent } from 'src/app/pages/assignemnent-edit/assignemnent-edit.component';
import { AssignmentAddComponent } from 'src/app/pages/assignemnent-add/assignemnent-add.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    InitialComponent,
    AssignmentEditComponent,
    AssignmentAddComponent,
  ]
})

export class AdminLayoutModule {}
