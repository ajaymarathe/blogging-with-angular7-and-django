import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //import these
import { HomeComponent } from './home/home.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HospitalsComponent } from './hospitals/hospitals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'show/:id', component: ShowQuestionComponent }, //pass id in route
  { path: 'hospitals', component: HospitalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
