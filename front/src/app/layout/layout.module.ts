import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ]
})
export class LayoutModule { }
