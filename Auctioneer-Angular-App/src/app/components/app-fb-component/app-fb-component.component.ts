import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";



@Component({
  selector: 'app-root',
  templateUrl: './app-fb-component.component.html',
  styleUrls: ['./app-fb-component.component.css']
})
export class AppFbComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    firebase.initializeApp({
        apiKey: "AIzaSyBBWDyifOvs5zdprF3gxvhL5nHbxL2MZbM",
        authDomain: "https://auctionneer-1.firebaseio.com"

      }
    )
  }

}
