import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberListComponent } from './committee-member-list.component';

describe('CommitteeMemberListComponent', () => {
  let component: CommitteeMemberListComponent;
  let fixture: ComponentFixture<CommitteeMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
