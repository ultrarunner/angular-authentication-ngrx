import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    testUser: User = { email: 'john.galt@email.com', password: 'abcd', token: 'sampleToken' };

    constructor() {

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
            if (email === this.testUser.email && password === this.testUser.password) {
                observer.next({ email: this.testUser.email, token: this.testUser.token });
            } else {
                observer.error({ error: 'invalid credentials' });
            }
            observer.complete();
        });
    }
}
