import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { DashboardNytTileComponent } from '../dashboard-nyt-tile/dashboard-nyt-tile.component';

@Component({
  selector: 'app-dashboard-rss-tile',
  templateUrl: './dashboard-rss-tile.component.html',
  styleUrls: ['./dashboard-rss-tile.component.css']
})

export class DashboardRssTileComponent implements OnInit {

  @Input() feed: Feed;
  rss: any = {};
  today = new Date();

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getRssFeed(this.feed.url, 5).subscribe(response => {
      this.rss = response;
    });
  }
}
