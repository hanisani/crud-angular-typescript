import { Component } from '@angular/core';
import { Department } from './department.model';

@Component
(
    {
        selector: 'app-department',
        templateUrl: './department.component.html',
        styleUrls: ['./department.component.css']
    }
)

export class DepartmentComponent
{
    departments : Department[] = [
        new Department(1, "Finance", "https://upload.wikimedia.org/wikipedia/commons/4/48/Seal_of_the_United_States_Army_War_College.png"),
        new Department(2, "Sale", "https://upload.wikimedia.org/wikipedia/commons/4/48/Seal_of_the_United_States_Army_War_College.png")
    ];
}