import { Injectable } from '@angular/core';
import {AuctionStatus, Offer} from "../models/offer";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class Offers11Service {
  public offers: Offer[];
  private index: number;






  constructor(public http: HttpClient) {
    this.offers = [];
    this.getAllOffers();
    if (this.getLength() === 0) {
      this.index = 0;
      for (let i = 0; i < 6; i++) {
        this.addRandomOffer();
      }
      this.saveAllOffers();
    }
  }


  getAllOffers() {
    this.http.get("http://localhost:8080/hallo")
    this.http.get('https://auctionneer-1.firebaseio.com/data.json').subscribe((data: Offer[]) => {
      this.offers = data;

      console.log(`Getting data from firebase: ${data}`);
    }, (error) => {
      console.log(`There's an error yo! in Offers11Service: ${error}`);
    });
  }

  // Or is it better practice to return the array itself?
  // Should return an observable that we can subscribe to, in our component
  // Atleast in the book there is some documentation of how to use this method in the component.
  // Potentially we need to change some code to make this method work tho.
  returnAllOffers() {
    return this.http.get<Offer[]>('https://auctionneer-1.firebaseio.com/data.json');
  }


  // TODO Put Offer[] list, Is this the correct way of using put?
  saveAllOffers() {
    const headers = new HttpHeaders({'Content-Type': 'application.json'});
    this.http.put('https://auctionneer-1.firebaseio.com/app.json', this.offers, {headers: headers},)
      .toPromise()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }


  //TODO do these neeeeeed to be static?
  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  getLength(): number {
    return this.offers.length;
  }

  get(offerIndex: number): Offer {
    return this.offers[offerIndex];
  }

  add(offer: Offer): number {
    this.offers.push(offer);
    return this.offers.length - 1;
  }

  update(oIdx: number, offer: Offer) {
    this.offers.splice(oIdx, 1, offer);
  }

  remove(oIdx: number): Offer {
    return this.offers.splice(oIdx, 1).pop();
  }

  addRandomOffer() {
    this.offers.push(new Offer(
      `Offer ${this.index++}`,
      Offers11Service.randomDate(new Date(2012, 12, 12), new Date()),
      `qwerty`,
      AuctionStatus[Offers11Service.randomInt(0, 7).toString()],
      Offers11Service.randomInt(0, 10),
      Offers11Service.randomInt(0, 100),
    ));
  }


}
