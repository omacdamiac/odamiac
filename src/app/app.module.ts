import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftComponent } from './left/left.component';
import { CollageComponent } from './collage/collage.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftComponent,
    CollageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
