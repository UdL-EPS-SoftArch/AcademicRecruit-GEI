import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationDeleteComponent } from './job-application-delete.component';

describe('JobApplicationDeleteComponent', () => {
  let component: JobApplicationDeleteComponent;
  let fixture: ComponentFixture<JobApplicationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplicationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
