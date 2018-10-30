import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import * as userActions from '../../store/actions/authentication.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  $user: Observable<User>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.$user = this.store.select('user');
    this.store.dispatch(new userActions.GetUser());
  }

  googleLogin(): void {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  githubLogin(): void {
    this.store.dispatch(new userActions.GithubLogin());
  }

  logout(): void {
    this.store.dispatch(new userActions.Logout());
  }
}
