import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  todayDate: String;

  constructor() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    this.todayDate = new Date().toLocaleDateString('nl-NL', options);


  }

  ngOnInit(): void {
  }
}
