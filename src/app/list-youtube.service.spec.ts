import { TestBed } from '@angular/core/testing';

import { ListYoutubeService } from './list-youtube.service';

describe('ListYoutubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListYoutubeService = TestBed.get(ListYoutubeService);
    expect(service).toBeTruthy();
  });
});
