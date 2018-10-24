import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    testUser: User;

    constructor(public angularFireAuth: AngularFireAuth) {

    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isLoggedIn() {
        const token = this.getToken();
        return token !== null;
    }

    login(email: string, password: string): Observable<any> {
        // mocked response
        return new Observable((observer) => {
            // if (email === this.testUser.email && password === this.testUser.password) {
            //     observer.next({ email: this.testUser.email, token: this.testUser.token });
            // } else {
            //     observer.error({ error: 'invalid credentials' });
            // }
            // observer.complete();
        });
    }

    doGoogleLogin(): Observable<firebase.auth.UserCredential> {
        // setting the persistence to LOCAL means the authentication is good
        // until the user signs out.
        // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        //     .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        const subscription = from(this.angularFireAuth.auth.signInWithPopup(provider));
        return subscription;
        // });
    }
}
