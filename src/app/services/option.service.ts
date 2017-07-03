import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Option } from './../models/option.model';

@Injectable()
export class OptionService
{
    surveyURL: string = "http://localhost:62456/api/option/";

    constructor(private http: Http, private router: Router) {}
    
    getOptions(id: number): Observable<Option[]> {        
        return this.http.get(this.surveyURL + id, { headers: this.getHeaders() }).map(
            response => response.json() as Option[]
        );
    }

    private getHeaders() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Accept', 'application/json');
        return headers;
    }
}