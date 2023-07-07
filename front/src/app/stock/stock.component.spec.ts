import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { a1 } from 'src/test/data';
import { throwError } from 'rxjs';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [StockComponent],
    });
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load at first', fakeAsync(() => {
    fixture.detectChanges();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should getArticle id', () => {
    const id = component.getArticleId(0, a1);
    expect(id).toBe('a1');
  });

  it('should refresh', fakeAsync(() => {
    component.refresh();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should refresh in error', fakeAsync(() => {
    component['articleService'].refresh = () => {
      return throwError(() => new Error('oups'));
    };
    component.refresh();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should remove', fakeAsync(() => {
    component.selectedArticles = new Set([a1]);
    component.remove();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should remove in error', fakeAsync(() => {
    component['articleService'].refresh = () => {
      return throwError(() => new Error('oups'));
    };
    component.remove();
    tick(300);
    expect(component).toBeTruthy();
  }));
});
