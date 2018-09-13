import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { CyberthorityComponent } from './cyberthority/cyberthority.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent }, //pathMatch overrides the default of prefix an tells angular to only redirect if the full path is empty
  { path: 'login', component: LoginComponent },
  { path: 'Signedin', component: SignedInComponent },
  { path: 'cyberthority',  component: CyberthorityComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
