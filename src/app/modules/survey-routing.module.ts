import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { SurveyComponent } from './../survey/survey.component';
import { SurveyAddComponent } from './../survey/survey-add/survey-add.component';
import { SurveyEditComponent } from './../survey/survey-edit/survey-edit.component';
import { QuestionComponent } from './../question/question.component';
import { QuestionAddComponent } from './../question/question-add/question-add.component';

//services
import { AuthGuardService } from './../services/auth-guard.service';

const surveyRoutes: Routes = [
    { path: 'surveys', component: SurveyComponent, canActivate: [AuthGuardService] },
    { path: 'surveys/add', component: SurveyAddComponent, canActivate: [AuthGuardService] },
    { path: 'surveys/edit/:id', component: SurveyEditComponent, canActivate: [AuthGuardService] },
    { path: 'questions/:id', component: QuestionComponent, canActivate: [AuthGuardService] },
    { path: 'questions/add/:id', component: QuestionAddComponent, canActivate: [AuthGuardService] }
]

@NgModule({
    imports: [
        RouterModule.forChild(surveyRoutes)
    ],
    exports: [RouterModule]
})
export class SurveyRoutingModule {

}