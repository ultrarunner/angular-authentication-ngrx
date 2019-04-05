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
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { Routing } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment';
import { userReducer } from './store/reducers/authentication.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedService } from './services/feed.service';
import { HttpClientModule } from '@angular/common/http';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    NgbModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    EffectsModule.forRoot([
      AuthenticationEffects
    ]),
    StoreModule.forRoot({
      user: userReducer
    }),
    // used for chrome redux dev tools
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    NgMasonryGridModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    FeedService
  ],
  bootstrap: [
    AppComponent,
    LoginComponent
  ]
})
export class AppModule { }
