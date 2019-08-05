import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './main/login/login.component';
import {ContentComponent} from './main/content/content.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: ContentComponent},
  {path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
