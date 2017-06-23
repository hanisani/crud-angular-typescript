import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Question } from './../models/question.model';

@Injectable()
export class QuestionService
{
    surveyURL: string = "http://localhost:62456/api/survey/";

    constructor(private http: Http, private router: Router) {        
    }

    getQuestions(id: number): Observable<Question[]> {
        return this.http.get(this.surveyURL + id + "/question/", { headers: this.getHeaders() }).map(
            response => response.json() as Question[]
        );
    }

    addQuestion(question: Question) {        
        this.http.post(this.surveyURL, JSON.stringify(question), { headers: this.getHeaders() }).subscribe(
            (response: Response) => {
                this.router.navigate(['/questions/1']);
            },
            (error: Response) => {
                alert(error.status + '\r\n' + error.statusText + '\r\n' + error.url);
            },
            () => console.log('Add question complete')
        );
    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Accept', 'application/json');
        return headers;
    }
}