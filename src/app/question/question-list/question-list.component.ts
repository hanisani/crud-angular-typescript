import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Question } from '../../models/question.model';
import { QuestionService } from './../../services/question.service';

@Component
(
  {
    selector: 'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
  }
)
export class QuestionListComponent implements OnInit 
{  
  questions : Question []

  constructor(private questionService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadQuestions(this.route.snapshot.params['id']);
  }

  loadQuestions(id: number) {
    this.questionService.getQuestions(id).subscribe(
      questions => this.questions = questions
    );
  }

}
