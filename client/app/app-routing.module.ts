import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InfoComponent} from './components/info/info.component';
import {LoginComponent} from './components/login/login.component';
import {Base_look} from './components/base_look/base_look.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'work', component: InfoComponent },
  { path: 'look', component: Base_look },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
