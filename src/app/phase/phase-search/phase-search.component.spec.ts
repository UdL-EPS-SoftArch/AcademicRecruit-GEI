import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseSearchComponent } from './phase-search.component';

describe('PhaseSearchComponent', () => {
  let component: PhaseSearchComponent;
  let fixture: ComponentFixture<PhaseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhaseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
