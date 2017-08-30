import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MainComponent } from './main/main.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: '/main/students', pathMatch: 'full' },
  // { path: 'main',  component: MainComponent },
  { path: 'main/students', component: StudentComponent},
  { path: 'detail/:id', component: StudentDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}