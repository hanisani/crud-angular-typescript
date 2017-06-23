import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onBackSurvey() {
    this.router.navigate(['/surveys/']);
  }

  onBackQuestion() {
    this.router.navigate(['/questions/' + this.route.snapshot.params['id']], { relativeTo: this.route });
  }
}
