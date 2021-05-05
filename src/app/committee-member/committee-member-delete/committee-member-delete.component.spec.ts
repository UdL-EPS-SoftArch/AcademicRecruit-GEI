import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberDeleteComponent } from './committee-member-delete.component';

describe('CommitteeMemberDeleteComponent', () => {
  let component: CommitteeMemberDeleteComponent;
  let fixture: ComponentFixture<CommitteeMemberDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
