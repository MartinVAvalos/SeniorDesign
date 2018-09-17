import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    UserComponent,

  ],
  providers: [

  ]
})
export class CoreModule {}
