import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable, delay, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article, NewArticle } from '../interfaces/article';

const url = 'http://localhost:3000/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private readonly http: HttpClient) {
    super();
    console.log('http article');
  }

  override refresh(): Observable<void> {
    return of(undefined).pipe(
      delay(1000),
      switchMap(() => {
        return this.http.get<Article[]>(url);
      }),
      map((articles) => {
        this.articles$.next(articles);
      })
    );
  }

  override add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      delay(1000),
      switchMap(() => {
        return this.http.post<void>(url, newArticle);
      })
    );
  }
}
