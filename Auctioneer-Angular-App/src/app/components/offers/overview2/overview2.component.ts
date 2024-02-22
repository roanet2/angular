import {Component, OnInit} from '@angular/core';
import {AuctionStatus, Offer} from '../../../models/offer';
import {LoremIpsum} from 'lorem-ipsum';
import {generate} from "rxjs";

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})

export class Overview2Component implements OnInit {
  private offers: Offer[];
  private currentOffer: Offer = null;
  private index = 0;
  private clickedIndex: number;
  private lorem = new LoremIpsum();

  constructor() {
  }

  ngOnInit() {
    this.offers = [];
    for (let i = 0; i < 10; i++) {
      this.addRandomOffer();
    }
  }

  saveOverViewOffer(offer: Offer) {
    console.log(`OfferTitle: ${offer.title}`);
    this.offers.splice(this.clickedIndex, 1, offer);
  }

  deleteOverViewOffer(offer: Offer) {
    console.log(`delete offer`);
    this.offers.splice(this.clickedIndex, 1);
    const n = this.clickedIndex - 1;
    this.displayOffer(this.offers[n], n);
  }

  private addAndDisplayRandomOffer() {
    this.addRandomOffer();
    const n = this.offers.length - 1;
    this.displayOffer(this.offers[n], n);
  }

  private displayOffer(offer: Offer, indx: number) {
    this.currentOffer = offer;
    this.clickedIndex = indx;
  }

  private addRandomOffer() {
    this.offers.push(new Offer(
      `Offer: ${this.index++}: ${this.lorem.generateWords(2)}`,
      this.randomDate(new Date(2012, 12, 12), new Date()),
      `${this.lorem.generateSentences(1)}`,
      AuctionStatus[this.randomInt(0, 7).toString()],
      this.randomInt(0, 10),
      this.randomInt(0, 100),
    ));
  }

  private randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

}
