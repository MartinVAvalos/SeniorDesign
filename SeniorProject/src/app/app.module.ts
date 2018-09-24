import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './header/header.component';
import { HomeMembersComponent } from './home/home-members/home-members.component';
import { HomeComponent } from './home/home.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { HomeEventsComponent } from './home/home-events/home-events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMembersComponent,
    HomeComponent,
    DropdownDirective,
    HomeEventsComponent
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
