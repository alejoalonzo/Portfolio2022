import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextThreeComponent } from './text-three.component';

describe('TextThreeComponent', () => {
  let component: TextThreeComponent;
  let fixture: ComponentFixture<TextThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
