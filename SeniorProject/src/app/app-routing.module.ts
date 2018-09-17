import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { UserComponent } from './core/user/user.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' }, //pathMatch overrides the default of prefix an tells angular to only redirect if the full path is empty
  { path: 'users', component: UserComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
