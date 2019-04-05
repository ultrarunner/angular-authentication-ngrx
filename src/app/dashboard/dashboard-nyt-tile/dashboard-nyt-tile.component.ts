import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-dashboard-nyt-tile',
  templateUrl: './dashboard-nyt-tile.component.html',
  styleUrls: ['./dashboard-nyt-tile.component.css']
})
export class DashboardNytTileComponent implements OnInit {

  @Input() feed: Feed;
  articles: any = {};
  today = new Date();

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    const section = String(this.feed.options['section']).toLowerCase();
    this.feedService.getNyFeed(section, 5).subscribe(response => {
      this.articles = response;
    });
  }
}
