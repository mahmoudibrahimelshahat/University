import { TestBed } from '@angular/core/testing';

import { CourseoneService } from './courseone.service';

describe('CourseoneService', () => {
  let service: CourseoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
