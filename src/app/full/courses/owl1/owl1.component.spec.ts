import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Owl1Component } from './owl1.component';

describe('Owl1Component', () => {
  let component: Owl1Component;
  let fixture: ComponentFixture<Owl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Owl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Owl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
