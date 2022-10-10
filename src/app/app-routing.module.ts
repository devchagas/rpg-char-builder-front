import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { JobsCreateComponent } from './components/views/jobs/jobs-create/jobs-create.component';
import { JobsDeleteComponent } from './components/views/jobs/jobs-delete/jobs-delete.component';
import { JobsReadComponent } from './components/views/jobs/jobs-read/jobs-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsReadComponent
  },
  {
    path: 'jobs/create',
    component: JobsCreateComponent
  },
  {
    path: 'jobs/delete/:id',
    component: JobsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
