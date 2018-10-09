import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../services/authentication.service';
import { Observable, of } from 'rxjs';
import { AuthenticationActionTypes, Login, LoginSuccess, LoginFailure, Logout } from '../actions/authentication.actions';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions: Actions,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    @Effect()
    Login: Observable<any> = this.actions
        .ofType(AuthenticationActionTypes.LOGIN)
        .pipe(
            map((action: Login) => action.payload),
            switchMap(payload => {
                return this.authenticationService.login(payload.email, payload.password)
                    .pipe(
                        map((user: User) => {
                            console.log(user);
                            return new LoginSuccess({ token: user.token, email: payload.email });
                        }),
                        catchError((error) => {
                            return of(new LoginFailure({ error: error }));
                        }));
            }));

    @Effect({ dispatch: false })
    LoginSuccess: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            localStorage.setItem('emal', user.payload.email);
            this.router.navigateByUrl('/');
        })
    );

    @Effect({ dispatch: false })
    LoginFailure: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGIN_FAILURE),
    );

    @Effect({ dispatch: false })
    Logout: Observable<any> = this.actions.pipe(
        ofType(AuthenticationActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem('token');
            localStorage.removeItem('emal');
            this.router.navigateByUrl('/login');
        })
    );
}
