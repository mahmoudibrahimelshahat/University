import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseoneComponent } from './courseone.component';

describe('CourseoneComponent', () => {
  let component: CourseoneComponent;
  let fixture: ComponentFixture<CourseoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
