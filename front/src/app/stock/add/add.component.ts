import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { catchError, delay, of, switchMap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    price: new FormControl(0, [Validators.required]),
    qty: new FormControl(0, [Validators.required]),
  });
  faPlus = faPlus;
  errorMsg = '';

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  submit() {
    console.log('submit');
    const newArticle: NewArticle = this.f.value as NewArticle;

    of(undefined)
      .pipe(
        delay(2000),
        switchMap(() => this.articleService.add(newArticle)),
        switchMap(() => this.articleService.refresh()),
        switchMap(() => this.router.navigateByUrl('/stock')),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur Technique';
          return of(undefined);
        })
      )
      .subscribe();
  }
}
