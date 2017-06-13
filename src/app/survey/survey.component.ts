import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SurveyService } from './../services/survey.service';

@Component
  (
  {
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.css']
  }
  )

export class SurveyComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewSurvey() {
    this.router.navigate(['/surveys/add'], { relativeTo: this.route });
  }

}
