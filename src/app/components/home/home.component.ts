import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { User } from '../../models/user';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  $user: Observable<User>;
  $feeds: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private feedService: FeedService) {
  }

  ngOnInit() {
    this.$feeds = this.feedService.getPublicFeeds();
  }
}
