import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
import { PreviousSurveyComponent } from './previous-survey/previous-survey.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SurveyDisplayComponent } from './survey-display/survey-display.component';
import { TextAreaComponent } from './Form Components/text-area/text-area.component';
import { RadioButtonComponent } from './Form Components/radio-button/radio-button.component';
import { CheckboxComponent } from './Form Components/checkbox/checkbox.component';
import { DropDownComponent } from './Form Components/drop-down/drop-down.component';
import { TextBoxComponent } from './Form Components/text-box/text-box.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { QuestionComponent } from './question/question.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { authInterceptorProviders } from 'src/services/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    SurveyCreationComponent,
    PreviousSurveyComponent,
    SurveyAnalysisComponent,
    UserHomeComponent,
    LoginComponent,
    NavbarComponent,
    SurveyDisplayComponent,
    TextAreaComponent,
    RadioButtonComponent,
    CheckboxComponent,
    DropDownComponent,
    TextBoxComponent,
    CreateSurveyComponent,
    QuestionComponent,
    AddQuestionsComponent,
    UserNavComponent,
    UserLoginComponent,
    DashboardComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  
  providers: [authInterceptorProviders],

  bootstrap: [AppComponent,],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
