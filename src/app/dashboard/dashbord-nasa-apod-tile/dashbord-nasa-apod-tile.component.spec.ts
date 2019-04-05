import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordNasaApodTileComponent } from './dashbord-nasa-apod-tile.component';

describe('DashbordNasaApodTileComponent', () => {
  let component: DashbordNasaApodTileComponent;
  let fixture: ComponentFixture<DashbordNasaApodTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordNasaApodTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordNasaApodTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
