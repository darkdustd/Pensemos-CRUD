import { TestBed } from '@angular/core/testing';

import { DepartmentCRUDService } from './department-crud.service';

describe('ProductCRUDService', () => {
  let service: DepartmentCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
