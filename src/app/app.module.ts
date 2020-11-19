import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { userComponent } from './user/user.component';
import { usersComponent } from './users/users.component';
import { calculatorComponent } from './calculator/calculator.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    userComponent,
    usersComponent,
    calculatorComponent,
    ListOfUsersComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
