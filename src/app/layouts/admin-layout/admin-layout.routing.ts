import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AssignmentEditComponent } from 'src/app/pages/assignemnent-edit/assignemnent-edit.component';
import { AssignmentAddComponent } from 'src/app/pages/assignemnent-add/assignemnent-add.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'assignment-edit',   component: AssignmentEditComponent },
    { path: 'assignment-add',   component: AssignmentAddComponent },
];
