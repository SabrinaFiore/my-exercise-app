import { LogginService } from './logginService.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';
import { CalculatorResultBtnComponent } from './calculator-result-btn/calculator-result-btn.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UsersFormComponent,
    ListOfUsersComponent,
    CalculatorComponent,
    CalculatorFormComponent,
    CalculatorResultBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ LogginService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
