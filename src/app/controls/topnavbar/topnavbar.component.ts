import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component
  (
  {
    selector: 'app-topnavbar',
    templateUrl: './topnavbar.component.html',
    styleUrls: ['./topnavbar.component.css']
  }
  )
export class TopnavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
