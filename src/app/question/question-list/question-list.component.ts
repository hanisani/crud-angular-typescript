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
  questions: Question []  

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {    
    this.loadQuestions(this.route.snapshot.params['id']);
  }

  loadQuestions(id: number) {
    this.questionService.getQuestions(id).subscribe(
      questions => this.questions = questions
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure that you wish to delete this question?')) {
      this.questionService.deleteQuestion(id).subscribe(
        () => {
          this.loadQuestions(this.route.snapshot.params['id']);
        }
      );
    }
  }

  onOptions(id: number) {    
    this.router.navigate(['/options/' + id]);
  }

}
