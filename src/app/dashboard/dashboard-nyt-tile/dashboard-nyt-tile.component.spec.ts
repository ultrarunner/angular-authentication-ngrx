import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNytTileComponent } from './dashboard-nyt-tile.component';

describe('DashboardNytTileComponent', () => {
  let component: DashboardNytTileComponent;
  let fixture: ComponentFixture<DashboardNytTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNytTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNytTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
