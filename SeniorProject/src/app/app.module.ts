import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { CyberthorityComponent } from './cyberthority/cyberthority.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignedInComponent,
    CyberthorityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
