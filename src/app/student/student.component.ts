import { Component } from '@angular/core';
import { Student } from './student.model';

@Component
(
    {
        selector: 'app-student',
        templateUrl: './student.component.html',
        styleUrls: ['./student.component.css']
    }
)

export class StudentComponent
{
    // ID: number = 10;
    // Name: string = "Faheem Ahmad";
    // Address: string = "Ara Damansara";
    // IsMarried: boolean = true;
    // AllowNewStudent: boolean = false;

    // constructor()
    // {
    //     setTimeout(() => { // ES6 Arrow Function Syntex
    //         this.AllowNewStudent = true;
    //     }, 2000);
    // }

    // constructor(id: number, name: string, address: string, isMarried: boolean, allowNewStudent: boolean)
    // {
    //     this.ID = id;
    //     this.Name = name;
    //     this.Address = address;
    //     this.IsMarried = isMarried;
    //     this.AllowNewStudent = allowNewStudent;
    // }

    students : Student [] = 
    [
        new Student('Faheem', '101'),
        new Student('Fahad', '102')
    ];
}