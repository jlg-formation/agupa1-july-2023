import { Component } from '@angular/core';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { catchError, delay, finalize, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  faCircleNotch = faCircleNotch;
  selectedArticles = new Set<Article>();

  errorMsg = '';
  isRemoving = false;

  constructor(protected readonly articleService: ArticleService) {}

  getArticleId(index: number, a: Article) {
    return a.id;
  }

  remove() {
    console.log('remove');
    of(undefined)
      .pipe(
        tap(() => {
          this.errorMsg = '';
          this.isRemoving = true;
        }),
        delay(3000),
        switchMap(() => {
          const ids = [...this.selectedArticles].map((a) => a.id);
          return this.articleService.remove(ids);
        }),
        switchMap(() => this.articleService.refresh()),
        tap(() => {
          this.selectedArticles.clear();
        }),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur Technique';
          return of(undefined);
        }),
        finalize(() => {
          this.isRemoving = false;
        })
      )
      .subscribe();
  }

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }
}
