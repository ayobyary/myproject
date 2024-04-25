import { TestBed } from '@angular/core/testing';

import { ListServisesService } from './list-servises.service';

describe('ListServisesService', () => {
  let service: ListServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
