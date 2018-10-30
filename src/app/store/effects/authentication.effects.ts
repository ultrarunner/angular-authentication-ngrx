import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { map, switchMap, delay, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import * as userActions from '../actions/authentication.actions';
export type Action = userActions.All;

@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions: Actions,
        private angularFireAuth: AngularFireAuth
    ) { }

    @Effect()
    getUser: Observable<Action> = this.actions.ofType(userActions.GET_USER)
        .pipe(
            map((action: userActions.GetUser) => action.payload),
            switchMap(payload => this.angularFireAuth.authState),
            // delay(2000), // just to simulate and display loading spinner
            map(authData => {
                if (authData) {
                    // successful login
                    const user = new User(authData.uid, authData.displayName, authData.email);
                    return new userActions.Authenticated(user);
                } else {
                    // failed logged in
                    return new userActions.NotAuthenticated();
                }
            }),
            catchError(error => of(new userActions.AuthError()))
        );

    @Effect()
    google: Observable<Action> = this.actions.ofType(userActions.GOOGLE_LOGIN)
        .pipe(
            map((action: userActions.GetUser) => action.payload),
            switchMap(payload => {
                return from(this.googleLogin());
            }),
            delay(2000), // just to simulate and display loading spinner
            map(credentials => {
                return new userActions.GetUser();
            }),
            catchError(error => of(new userActions.AuthError({ error: error.message })))
        );

    @Effect()
    github: Observable<Action> = this.actions.ofType(userActions.GITHUB_LOGIN)
        .pipe(
            map((action: userActions.GetUser) => action.payload),
            switchMap(payload => {
                return from(this.githubLogin());
            }),
            delay(2000), // just to simulate and display loading spinner
            map(credentials => {
                return new userActions.GetUser();
            }),
            catchError(error => of(new userActions.AuthError({ error: error.message })))
        );

    @Effect()
    logout: Observable<Action> = this.actions.ofType(userActions.LOGOUT)
        .pipe(
            map((action: userActions.GetUser) => action.payload),
            switchMap(payload => {
                return from(this.angularFireAuth.auth.signOut());
            }),
            map(credentials => {
                return new userActions.NotAuthenticated();
            }),
            catchError(error => of(new userActions.AuthError({ error: error.message })))
        );

    private googleLogin(): Promise<any> {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        return this.angularFireAuth.auth.signInWithPopup(provider);
    }

    private githubLogin(): Promise<any> {
        const provider = new firebase.auth.GithubAuthProvider();
        // provider.addScope('profile');
        provider.addScope('email');
        return this.angularFireAuth.auth.signInWithPopup(provider);
    }
}
