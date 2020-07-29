import { TestBed } from '@angular/core/testing';

import { EmployeeCRUDService } from './employee-crud.service';

describe('InventoryCRUDService', () => {
  let service: EmployeeCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
