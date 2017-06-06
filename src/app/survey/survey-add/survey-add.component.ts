import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SurveyService } from './../../services/survey.service';
import { Survey } from '../../models/survey.model';

@Component
  (
  {    
    selector: 'app-survey-add',
    templateUrl: './survey-add.component.html',
    styleUrls: ['./survey-add.component.css']
  }
  )
export class SurveyAddComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {

  }

  onAdd(form: NgForm) {
    const newSurvey = new Survey(form.value.title);
    this.surveyService.addSurvey(newSurvey);
    form.reset();
  }

  onBack(): void {
    this.router.navigate(['/surveys'], { relativeTo: this.route });
  }

  onClear(form: NgForm) {
    form.reset();
  }

}
