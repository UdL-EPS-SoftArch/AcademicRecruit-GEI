import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationSearchComponent } from './job-application-search.component';

describe('JobApplicationSearchComponent', () => {
  let component: JobApplicationSearchComponent;
  let fixture: ComponentFixture<JobApplicationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
