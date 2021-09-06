import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { NormalGuard } from 'src/services/normal.guard';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PreviousSurveyComponent } from './previous-survey/previous-survey.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { AddnewQuestionComponent } from './addnew-question/addnew-question.component';

import { DisplayQuestionComponent } from './display-question/display-question.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { GiveSurveyComponent } from './give-survey/give-survey.component';

//import { UserLoginComponent } from './user-login/user-login.component';
//import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
//import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
//import { SurveyDisplayComponent} from './survey-display/survey-display.component'
// import { AddQuestionsComponent } from './add-questions/add-questions.component';
//mport { AddSurveyComponent } from './add-survey/add-survey.component';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},

  {
    path : 'adminHome',
    component:AdminDashboardComponent,
    canActivate :  [AuthGuard],    
    children:
    [
      {path : 'createSurvey', component : CreateSurveyComponent},
      {path : 'previousSurvey', component : PreviousSurveyComponent},
      {path : 'newQuestion/:sid', component: AddnewQuestionComponent},
      {path : 'displayQuestion/:id/:name',component: DisplayQuestionComponent},
    ]
  
  },

  {path : 'giveSurvey/:sid/:name',component: GiveSurveyComponent,canActivate : [NormalGuard]},
  {path : 'analysis', component : SurveyAnalysisComponent},
  {path : 'userHome', component : UserHomeComponent, canActivate : [NormalGuard]},
  
   // {
  //   path : 'adminHome', 
  //   component : AdminHomeComponent,
  //   canActivate :  [AuthGuard],    
  // },
  // {path : 'userLogin', component : UserLoginComponent},
  //{path : 'addSurvey', component : AddSurveyComponent},
  //{path : 'createSurvey', component : CreateSurveyComponent},
  //{path : 'previousSurvey', component : PreviousSurveyComponent}, 
  //{path : 'giveSurvey', component : SurveyDisplayComponent},
  //{path : 'addQuestion', component : AddQuestionsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
