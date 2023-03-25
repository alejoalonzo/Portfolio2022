import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaTextVideoComponent } from './mega-text-video.component';

describe('MegaTextVideoComponent', () => {
  let component: MegaTextVideoComponent;
  let fixture: ComponentFixture<MegaTextVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegaTextVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaTextVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
