import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {AccountsService} from "./services/accounts.service";
import {LoggingService} from "./services/logging.service";
import { AssignmentComponent } from './assignment/assignment.component';
import { ActiveUsersComponent } from './assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment/inactive-users/inactive-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
