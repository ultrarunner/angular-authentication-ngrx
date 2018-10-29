import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User;
  getState: Observable<any>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
  }
}
