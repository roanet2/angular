import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/mainpage/header/header.component';
import {HomeComponent} from './components/mainpage/home/home.component';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {Overview1Component} from './components/offers/overview1/overview1.component';
import {Overview2Component} from './components/offers/overview2/overview2.component';
import {Detail2Component} from './components/offers/detail2/detail2.component';
import {Overview3Component} from './components/offers/overview3/overview3.component';
import {Detail3Component} from './components/offers/detail3/detail3.component';
import {ErrorPageComponent} from './components/mainpage/error-page/error-page.component';
import {Overview4Component} from './components/offers/overview4/overview4.component';
import {Detail4Component} from './components/offers/detail4/detail4.component';
import {Detail41Component} from './components/offers/detail41/detail41.component';
import {Overview41Component} from './components/offers/overview41/overview41.component';
import {Overview5Component} from './components/offers/overview5/overview5.component';
import {Detail5Component} from './components/offers/detail5/detail5.component';
import { Detail42Component } from './components/offers/detail42/detail42.component';
import {Overview6Component} from "./components/offers/overview6/overview6.component";
import {Detail6Component} from "./components/offers/detail6/detail6.component";
import {SignInComponent} from "./components/auth/sign-in/sign-in.component";
import {SignOnComponent} from "./components/auth/sign-on/sign-on.component";
import {AppFbComponent} from "./components/app-fb-component/app-fb-component.component";
import {SessionService} from "./components/auth/session.service";

import { Detail11Component } from './components/offers2/detail11/detail11.component';
import { Overview11Component } from './components/offers2/overview11/overview11.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'offers', children: [
      {path: 'overView1', component: Overview1Component},
      {path: 'overView2', component: Overview2Component},
      {path: 'overView3', component: Overview3Component},
      {
        path: 'overView4', component: Overview4Component, children: [
          {
            path: 'edit', component: Detail4Component
          }
        ]
      }, {
        path: 'overView41', component: Overview41Component, children: [
          {
            // path: 'edit', component: Detail41Component, canDeactivate: [CanDeactivateGuardService]
            path: 'edit', component: Detail41Component
          }
        ]
      },  {
        path: 'overView42', component: Overview4Component, children: [
          {
            path: 'edit', component: Detail42Component
          }
        ]
      }, {
        path: 'overView5', component: Overview5Component, children: [
          {path: 'edit', component: Detail5Component}
        ]
      },
      {
      path: 'overView6', component: Overview6Component, children: [
        {path: 'edit', component: Detail6Component}
        ]
      }
]

  },
  {path: 'signin', component: SignInComponent},
  {path: 'signon', component: SignOnComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavBarComponent,
    Overview1Component,
    Overview2Component,
    Detail2Component,
    Overview3Component,
    Detail3Component,
    ErrorPageComponent,
    Overview4Component,
    Detail4Component,
    Detail41Component,
    Overview41Component,
    Overview5Component,
    Detail5Component,
    Detail42Component,
    Detail6Component,
    Overview6Component,
    AppFbComponent,
    SignOnComponent,
    SignInComponent,

    Detail11Component,
    Overview11Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule

  ],
  providers: [SessionService],
  //bootstrap: [AppComponent]
  bootstrap: [AppFbComponent]
})

export class AppModule {
}
