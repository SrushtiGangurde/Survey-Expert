import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { PreviousSurveyComponent } from './previous-survey/previous-survey.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';
import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path : '', redirectTo : 'adminHome',pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'surveyCreation', component : SurveyCreationComponent},
  {path : 'previousSurvey', component : PreviousSurveyComponent},
  {path : 'analysis', component : SurveyAnalysisComponent},
  {path : 'userHome', component : UserHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
