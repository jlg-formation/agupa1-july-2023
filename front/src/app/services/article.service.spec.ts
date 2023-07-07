import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { newArticle } from 'src/test/data';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
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
    expect(service).toBeTruthy();
  });

  it('should remove', () => {
    service.remove([]).subscribe();
    expect(service).toBeTruthy();
  });
});
