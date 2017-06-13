import { Router } from '@angular/router';
import { Http } from '@angular/http';

export class QuestionService
{
    questionURL: string = "http://localhost:62456/api/question/";

    constructor(private http: Http, private router: Router) {        
    }
}