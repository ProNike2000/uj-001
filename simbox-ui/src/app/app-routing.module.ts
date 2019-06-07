import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthguardGuard } from './service/authguard.guard';
import { MnoComponent } from './mno/mno.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NavigationComponent, canActivate: [AuthguardGuard] },
  { path: 'mno_list', component: MnoComponent },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
