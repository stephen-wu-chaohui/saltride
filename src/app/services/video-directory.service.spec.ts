import { TestBed } from '@angular/core/testing';

import { VideoDirectoryService } from './video-directory.service';

describe('VideoDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoDirectoryService = TestBed.get(VideoDirectoryService);
    expect(service).toBeTruthy();
  });
});
