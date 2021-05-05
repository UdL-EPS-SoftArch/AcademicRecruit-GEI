import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberEditComponent } from './committee-member-edit.component';

describe('CommitteeMemberEditComponent', () => {
  let component: CommitteeMemberEditComponent;
  let fixture: ComponentFixture<CommitteeMemberEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
