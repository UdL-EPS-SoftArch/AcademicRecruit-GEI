import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationSearchComponent } from './qualification-search.component';

describe('QualificationSearchComponent', () => {
  let component: QualificationSearchComponent;
  let fixture: ComponentFixture<QualificationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
