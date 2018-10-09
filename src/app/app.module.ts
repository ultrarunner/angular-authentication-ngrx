import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { AuthenticationEffects } from './store/effects/authentication.effects';
import { StoreModule } from '../../node_modules/@ngrx/store';
import { reducers } from './store/app.state';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { Routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing,
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreModule.forRoot(reducers, {})
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
