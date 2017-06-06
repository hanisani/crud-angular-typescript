import { Component } from '@angular/core';

@Component
(
    {
        selector: 'app-courses',
        templateUrl: './courses.component.html',
        styleUrls: ['./courses.component.css']
    }
)

export class CoursesComponent
{
    CourseName : string = "";
    CourseCode : string = "";

    constructor(name : string, code : string)
    {
        this.CourseName = name;
        this.CourseCode = code;
    }
}