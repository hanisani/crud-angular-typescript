import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { SurveyComponent } from './../survey/survey.component';
import { SurveyListComponent } from './../survey/survey-list/survey-list.component';
import { SurveyAddComponent } from './../survey/survey-add/survey-add.component';
import { SurveyEditComponent } from './../survey/survey-edit/survey-edit.component';
import { QuestionComponent } from './../question/question.component';
import { QuestionListComponent } from './../question/question-list/question-list.component';

//modules
import { SharedModule } from './shared.module';
import { SurveyRoutingModule } from './survey-routing.module';

@NgModule({
    declarations: [
        SurveyComponent,
        SurveyListComponent,
        SurveyAddComponent,
        SurveyEditComponent,
        QuestionComponent,
        QuestionListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        SurveyRoutingModule
    ]
})
export class SurveyModule {

}