import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RrzFormModule } from './form/rrz-form.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RrzFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
