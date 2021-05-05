import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberCreateComponent } from './committee-member-create.component';

describe('CommitteeMemberCreateComponent', () => {
  let component: CommitteeMemberCreateComponent;
  let fixture: ComponentFixture<CommitteeMemberCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
