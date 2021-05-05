import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberDetailComponent } from './committee-member-detail.component';

describe('CommitteeMemberDetailComponent', () => {
  let component: CommitteeMemberDetailComponent;
  let fixture: ComponentFixture<CommitteeMemberDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
