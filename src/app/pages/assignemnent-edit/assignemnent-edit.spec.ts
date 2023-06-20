import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AssignmentEditComponent } from './assignemnent-edit.component';

describe('AssignmentEditComponent', () => {
  let component:AssignmentEditComponent;
  let fixture: ComponentFixture<AssignmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
