import { TestBed } from '@angular/core/testing';

import { HttpArticleService, url } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { newArticle } from 'src/test/data';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let ctrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    ctrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an article', () => {
    service.add(newArticle).subscribe();

    expect(service).toBeTruthy();
  });

  it('should refresh', () => {
    service.refresh().subscribe();

    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([], { status: 200, statusText: 'OK' });

    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    service.remove([]).subscribe();
    expect(service).toBeTruthy();
  });
});
