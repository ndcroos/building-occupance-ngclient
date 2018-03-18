import { TestBed, inject } from '@angular/core/testing';

import { InhabitantSearchService } from './inhabitant-search.service';

describe('InhabitantSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InhabitantSearchService]
    });
  });

  it('should be created', inject([InhabitantSearchService], (service: InhabitantSearchService) => {
    expect(service).toBeTruthy();
  }));
});
