import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {SessionService} from "../session.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const  password = form.value.password;
    this.sessionService.signInUser(email, password);



  }






}
