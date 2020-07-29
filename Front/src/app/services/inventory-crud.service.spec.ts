import { TestBed } from '@angular/core/testing';

import { InventoryCRUDService } from './inventory-crud.service';

describe('InventoryCRUDService', () => {
  let service: InventoryCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
