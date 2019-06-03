import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SlugifyPipe } from './slugify.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowQuestionComponent,
    CreatePostComponent,
    HospitalsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SlugifyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
