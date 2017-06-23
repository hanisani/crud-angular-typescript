import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Question } from './../../models/question.model';
import { QuestionService } from './../../services/question.service';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onBackSurvey() {
    this.router.navigate(['/surveys/']);
  }

  onBackQuestion() {
    this.router.navigate(['/questions/' + this.route.snapshot.params['id']], { relativeTo: this.route });
  }

  onAdd(form: NgForm) {
    const newQuestion = new Question(form.value.title, 1);
    this.questionService.addQuestion(newQuestion);
    form.reset();
  }
}
