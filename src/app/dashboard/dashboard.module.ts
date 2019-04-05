import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRssTileComponent } from './dashboard-rss-tile/dashboard-rss-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardNytTileComponent } from './dashboard-nyt-tile/dashboard-nyt-tile.component';
import { DashbordNasaApodTileComponent } from './dashbord-nasa-apod-tile/dashbord-nasa-apod-tile.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
  ],
  declarations: [
    DashboardRssTileComponent,
    DashboardNytTileComponent,
    DashbordNasaApodTileComponent
  ],
  exports: [
    DashboardRssTileComponent,
    DashboardNytTileComponent,
    DashbordNasaApodTileComponent
  ]
})
export class DashboardModule { }
