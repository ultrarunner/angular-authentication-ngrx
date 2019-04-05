import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRssTileComponent } from './dashboard-rss-tile.component';

describe('DashboardRssTileComponent', () => {
  let component: DashboardRssTileComponent;
  let fixture: ComponentFixture<DashboardRssTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRssTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRssTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
