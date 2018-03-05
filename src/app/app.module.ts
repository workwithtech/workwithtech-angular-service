import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MessageAddComponent } from './message-add/message-add.component';
import { MessageListComponent } from './message-list/message-list.component';
import {MessageService} from './Service/message.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MessageAddComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
