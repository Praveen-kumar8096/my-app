import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicodemailComponent } from './typicodemail.component';

describe('TypicodemailComponent', () => {
  let component: TypicodemailComponent;
  let fixture: ComponentFixture<TypicodemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypicodemailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypicodemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
