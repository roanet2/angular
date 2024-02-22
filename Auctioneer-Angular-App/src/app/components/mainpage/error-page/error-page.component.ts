import { Component, OnInit } from '@angular/core';
import {OffersService} from "../../../services/offers.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  titleOfPage(){
    return this.router.url;
  }

}
