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
import { QuestionAddComponent } from './../question/question-add/question-add.component';
import { OptionComponent } from './../option/option.component';
import { OptionListComponent } from './../option/option-list/option-list.component';

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
        QuestionListComponent,
        QuestionAddComponent,
        OptionComponent,
        OptionListComponent
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