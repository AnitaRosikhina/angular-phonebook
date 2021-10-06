import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhonebookComponent } from './phonebook/phonebook.component';
import {FormsModule} from "@angular/forms";
import { SearchPipe } from './phonebook/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonebookComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
