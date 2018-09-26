import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeMembersComponent } from './home/home-members/home-members.component';
import { HomeEventsComponent } from './home/home-events/home-events.component';
import { HomeEventDescriptionComponent } from './home/home-events/home-event-description/home-event-description.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMembersComponent,
    HomeComponent,
    DropdownDirective,
    HomeEventsComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    HomeEventDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
