import { Injectable } from '@angular/core';
import { Article, NewArticle } from '../interfaces/article';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

const articles: Article[] = [
  { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
  { id: 'a2', name: 'Pelle', price: 1.5, qty: 14 },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[]>(articles);

  constructor() {}

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const article = { ...newArticle, id: crypto.randomUUID() };
        articles.push(article);
      })
    );
  }

  refresh(): Observable<void> {
    // throw new Error('rrr');
    return of(undefined);
  }
}
