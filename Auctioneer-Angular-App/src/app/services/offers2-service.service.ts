import {Injectable} from '@angular/core';
import {AuctionStatus, Offer} from '../models/offer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class Offers2Service {
  public offers: Offer[];
  private accessURL = 'https://auctioneer-8f7bf.firebaseio.com/app.json';
  private index: number;
  private loading: boolean;

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

  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  readAccessUrl(): string {
    return this.accessURL;
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
      Offers2Service.randomDate(new Date(2012, 12, 12), new Date()),
      `qwerty`,
      AuctionStatus[Offers2Service.randomInt(0, 7).toString()],
      Offers2Service.randomInt(0, 10),
      Offers2Service.randomInt(0, 100),
    ));
  }

  // TODO If list empty, generate 5 random offers.

  // TODO Get Offer[] list, what's the better practice? should a reassign the offers reference?
  getAllOffers() {
    this.loading = true;
    this.http.get(this.accessURL).subscribe((data: Offer[]) => {
      this.offers = data;
      this.loading = false;
      console.log(`Getting data from firebase: ${data}`);
    }, (error) => {
      console.log(`There's an error yo! in Offers2Service: ${error}`);
    });
  }

  // Or is it better practice to return the array itself?
  // Should return an observable that we can subscribe to, in our component
  // Atleast in the book there is some documentation of how to use this method in the component.
  // Potentially we need to change some code to make this method work tho.
  returnAllOffers() {
    return this.http.get<Offer[]>(this.accessURL);
  }


  // TODO Put Offer[] list, Is this the correct way of using put?
  saveAllOffers() {
    this.http.put(this.accessURL, this.offers)
      .toPromise()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

}
