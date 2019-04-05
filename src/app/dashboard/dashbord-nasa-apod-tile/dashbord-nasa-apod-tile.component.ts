import { Component, OnInit, Input } from '@angular/core';
import { Feed } from 'src/app/models/feed';
import { FeedService } from 'src/app/services/feed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashbord-nasa-apod-tile',
  templateUrl: './dashbord-nasa-apod-tile.component.html',
  styleUrls: ['./dashbord-nasa-apod-tile.component.css']
})
export class DashbordNasaApodTileComponent implements OnInit {

  @Input() feed: Feed;
  pod: any = {};
  IMG_URL = '';

  constructor(
    private feedService: FeedService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.feedService.getNasaApod().subscribe(response => {
      this.pod = response;
    });
  }

  openVerticallyCentered(content, imgUrl) {
    this.IMG_URL = imgUrl;
    this.modalService.open(content, { centered: true, size: 'lg', windowClass: 'xl' });
  }
}
