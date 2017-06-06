import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';

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
  
  questions : Question [] =
  [
    new Question(1, 'Title-1', 'Description-1'),
    new Question(2, 'Title-2', 'Description-2'),
    new Question(3, 'Title-3', 'Description-3')
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onReloadQuestions()
  {
    this.router.navigate(['/questions']);
  }

}
