import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { SurveyService } from './../../services/survey.service';
import { Survey } from './../../models/survey.model';

@Component({
  selector: 'app-survey-edit',
  templateUrl: './survey-edit.component.html',
  styleUrls: ['./survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {

  survey: Survey;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private surveyService: SurveyService, private router: Router) { }

  ngOnInit() {
    this.loadSurvey(this.route.snapshot.params['id']);
  }

  loadSurvey(id: number) {
    this.surveyService.getSurvey(id).subscribe(
      survey => this.survey = survey,
      error => this.errorMessage = <any>error,
      () => console.log('Get single survey complete')
    );
  }

  onUpdate(form: NgForm) {
    const newSurvey = new Survey(form.value.title);
    this.surveyService.updateSurvey(form.value.sid, newSurvey);
    form.reset();
  }

  onBack(): void {
    this.router.navigate(['/surveys'], { relativeTo: this.route });
  }

  onClear(form: NgForm) {
    form.reset();
  }

}
