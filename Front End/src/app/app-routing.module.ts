import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PreviousSurveyComponent } from './previous-survey/previous-survey.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';
import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SurveyDisplayComponent} from './survey-display/survey-display.component'
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AuthGuard } from 'src/services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '', redirectTo : 'dashboard',pathMatch : 'full'},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'userLogin', component : UserLoginComponent},
  {
    path : 'adminHome', 
    component : AdminHomeComponent,
    canActivate :  [AuthGuard],

  },
  {path : 'surveyCreation', component : AddQuestionsComponent},
  {path : 'previousSurvey', component : PreviousSurveyComponent},
  {path : 'analysis', component : SurveyAnalysisComponent},
  {path : 'userHome', component : UserHomeComponent},
  {path : 'giveSurvey', component : SurveyDisplayComponent},
  {path : 'createSurvey', component : CreateSurveyComponent},
  {path : 'addQuestion', component : AddQuestionsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
