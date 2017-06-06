import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit 
{

  Name : string = "";
  Address : string = "";

  constructor(name : string, address : string) 
  {
    this.Name = name;
    this.Address = address;
  }

  ngOnInit() {
  }

}