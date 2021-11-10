import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { ClassesComponent } from './admin/classes/classes.component';
import { LoginComponent } from './login/login.component';
import { ClassListComponent } from './non-admin/user-class-list/class-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'admin-users', component:UsersComponent },
  { path: 'admin-classes', component:ClassesComponent},
  { path: 'class-list',component:ClassListComponent},
  { path : 'registration',component:RegistrationComponent},
  { path: 'login',component:LoginComponent},
  { path: '',component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[UsersComponent,ClassesComponent,LoginComponent,ClassListComponent,RegistrationComponent];