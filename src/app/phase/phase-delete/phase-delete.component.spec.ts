import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseDeleteComponent } from './phase-delete.component';

describe('PhaseDeleteComponent', () => {
  let component: PhaseDeleteComponent;
  let fixture: ComponentFixture<PhaseDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
