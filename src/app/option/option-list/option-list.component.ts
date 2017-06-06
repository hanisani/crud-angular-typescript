import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Option } from '../../models/option.model';

@Component
(
  {
    selector: 'app-option-list',
    templateUrl: './option-list.component.html',
    styleUrls: ['./option-list.component.css']
  }
)
export class OptionListComponent implements OnInit 
{

  options: Option[] =
  [
    new Option(1, 'Title-1', 'Description-1'),
    new Option(1, 'Title-2', 'Description-2'),
    new Option(1, 'Title-3', 'Description-3')
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onReloadOptions()
  {
    this.router.navigate(['/options']);
  }

}
