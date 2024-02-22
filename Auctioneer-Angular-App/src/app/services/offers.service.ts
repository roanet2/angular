import {Injectable} from '@angular/core';
import {AuctionStatus, Offer} from '../models/offer';

@Injectable({
  providedIn: 'root'
})

export class OffersService {
  public offers: Offer[];
  private index: number;

  constructor() {
    this.offers = [];
    this.index = 0;
    for (let i = 0; i < 6; i++) {
      this.addRandomOffer();
    }
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
      OffersService.randomDate(new Date(2012, 12, 12), new Date()),
      `qwerty`,
      AuctionStatus[OffersService.randomInt(0, 7).toString()],
      OffersService.randomInt(0, 10),
      OffersService.randomInt(0, 100),
    ));
  }

}


