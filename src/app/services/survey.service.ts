import { Router, Params } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { Http, HttpModule, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Survey } from './../models/survey.model';

@Injectable()
export class SurveyService {

    surveyURL = "http://localhost:62456/api/survey/";

    constructor(private http: Http, private router: Router) { }

    getSurveys() {
        return this.http.get(this.surveyURL, { headers: this.getHeaders() }).map(
            response => response.json() as Survey[]
        ).catch(
            (error: Response) => {
                return Observable.throw(error.json().error || 'Something went wrong');
            }
            );
    }

    getSurvey(id: number) {
        return this.http.get(this.surveyURL + id, { headers: this.getHeaders() }).map(
            response => response.json() as Survey
        ).catch(
            (error: Response) => {
                return Observable.throw(error.json().error || 'Something went wrong');
            }
            );
    }

    addSurvey(survey: Survey) {
        this.http.post(this.surveyURL, survey, { headers: this.getHeaders() }).subscribe(
            (response: Response) => {
                this.router.navigate(['/surveys']);
            },
            (error: Response) => {
                alert(error.status + '\r\n' + error.statusText + '\r\n' + error.url);
            },
            () => console.log('Add survey complete')
        );
    }

    updateSurvey(id: number, survey: Survey) {
        this.http.put(this.surveyURL + id, survey, { headers: this.getHeaders() }).subscribe(
            (response: Response) => {
                this.router.navigate(['/surveys']);
            },
            (error: Response) => {
                alert(error.status + '\r\n' + error.statusText + '\r\n' + error.url);
            }
        );
    }

    deleteSurvey(id: number) {
        this.http.delete(this.surveyURL + id, { headers: this.getHeaders() }).subscribe(
            (response: Response) => {                
                if (response.status === 200) {
                    alert('Survey deleted successfully');                    
                }
            },
            (error: Response) => {
                alert(error.status + '\r\n' + error.statusText + '\r\n' + error.url);
            }
        );        
    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return headers;
    }
}