import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



import { SurveyService } from './../../services/survey.service';
import { Survey } from '../../models/survey.model';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveys: Survey[];

  constructor(private router: Router, private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys() {
    this.surveyService.getSurveys().subscribe(
      surveys => this.surveys = surveys,      
      () => console.log('Get all surveys complete')
    );
  }

  onEdit(id: number) {
    this.router.navigate(['/surveys/edit/' + id], { relativeTo: this.route });
  }

  onDelete(id: number) {
    if (confirm('Are you sure that you wish to delete this survey?')) {
      this.surveyService.deleteSurvey(id).subscribe(
        () => {
          this.loadSurveys();
        }
      );
    }
  }

  onQuestions(id: number) {
    this.router.navigate(['/questions/' + id]);
  }

}
