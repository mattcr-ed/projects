import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picalc } from './picalc';

describe('Picalc', () => {
  let component: Picalc;
  let fixture: ComponentFixture<Picalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Picalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Picalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
