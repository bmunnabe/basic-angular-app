import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../material.module';
import { LoginComponent } from './components/login/login.component';
import { LoginCheckService } from './services/login-check.service';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '' , component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'no-access', component: NoAccessComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    NoAccessComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [LoginCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
