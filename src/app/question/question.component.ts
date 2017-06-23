import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSurveys() {    
    this.router.navigate(['/surveys/']);
  }

  onNewQuestion() {    
    this.router.navigate(['/questions/add/' + this.route.snapshot.params['id']], { relativeTo: this.route });
  }

}