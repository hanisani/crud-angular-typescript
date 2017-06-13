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
  
  questions : Question []

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
