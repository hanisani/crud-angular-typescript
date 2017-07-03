import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Option } from '../../models/option.model';
import { OptionService } from './../../services/option.service';

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
  options: Option []

  constructor(private router: Router, private route: ActivatedRoute, private optionService: OptionService) { }

  ngOnInit() {    
    this.loadOptions(this.route.snapshot.params['id']);
  }

  loadOptions(id: number) {
    this.optionService.getOptions(id).subscribe(
      options => this.options = options
    );
  }

}
