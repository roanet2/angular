import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import  {SessionService} from '../session.service';
@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css']
})
export class SignOnComponent implements OnInit {

  constructor(public  sessionServer: SessionService) { }

  ngOnInit() {

  }
  onSignUp(form: NgForm){
    const  email = form.value.email;
    const  password = form.value.password;
    this.sessionServer.signupUser(email,password);


}

}
