import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DemoMaterialModule} from './material-module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DashComponent } from './dash/dash.component';
import { QnsAddComponent } from './qns-add/qns-add.component';
import { QnsListComponent } from './qns-list/qns-list.component';
import { LoginComponent } from './login/login.component';
import { QuizMainComponent } from './quiz-main/quiz-main.component';
import { appRoutes } from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    QnsAddComponent,
    QnsListComponent,
    LoginComponent,
    QuizMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
