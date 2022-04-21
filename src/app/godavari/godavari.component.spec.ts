import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodavariComponent } from './godavari.component';

describe('GodavariComponent', () => {
  let component: GodavariComponent;
  let fixture: ComponentFixture<GodavariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodavariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodavariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
