import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../auth/session.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  }

  onLogout(){
    this.sessionService.logout();
  }

}
