import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

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
}
