import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../auth/session.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todayDate: String;
  emailadres: String;

  constructor(private sessionservice: SessionService) {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.todayDate = new Date().toLocaleDateString('nl-NL', options);
    if (sessionservice.token == null) {
      this.emailadres = "Visitor";
    }
    else{
    
    }

  }

  ngOnInit() {
  }




}
