import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';
import { ArticleService } from './article.service';

export const url = 'http://localhost:3000/api/articles';

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
      switchMap(() => {
        return this.http.post<void>(url, newArticle);
      })
    );
  }

  override remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.delete<void>(url, {
          body: ids,
        });
      })
    );
  }
}
