import { Component } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashCan = faTrashCan;
  selectedArticles = new Set<Article>();

  constructor(protected readonly articleService: ArticleService) {}

  getArticleId(index: number, a: Article) {
    return a.id;
  }

  remove() {
    console.log('remove');
    of(undefined)
      .pipe(
        switchMap(() => {
          const ids = [...this.selectedArticles].map((a) => a.id);
          return this.articleService.remove(ids);
        }),
        switchMap(() => this.articleService.refresh())
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
