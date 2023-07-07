import { TestBed } from '@angular/core/testing';

import { HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
