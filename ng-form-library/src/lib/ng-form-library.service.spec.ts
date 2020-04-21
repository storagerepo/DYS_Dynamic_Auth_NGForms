import { TestBed } from '@angular/core/testing';

import { NgFormLibraryService } from './ng-form-library.service';

describe('NgFormLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFormLibraryService = TestBed.get(NgFormLibraryService);
    expect(service).toBeTruthy();
  });
});
