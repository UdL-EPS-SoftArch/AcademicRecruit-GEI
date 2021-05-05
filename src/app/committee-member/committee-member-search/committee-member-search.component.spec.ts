import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeMemberSearchComponent } from './committee-member-search.component';

describe('CommitteeMemberSearchComponent', () => {
  let component: CommitteeMemberSearchComponent;
  let fixture: ComponentFixture<CommitteeMemberSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeMemberSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeMemberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
