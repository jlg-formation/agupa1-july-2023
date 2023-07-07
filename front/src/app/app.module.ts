import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleService } from './services/article.service';
import { HttpArticleService } from './services/http-article.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [{ provide: ArticleService, useClass: HttpArticleService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
