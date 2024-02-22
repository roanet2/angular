import {Component, OnInit} from '@angular/core';
import {AuctionStatus, Offer} from '../../../models/offer';

@Component({
  selector: 'app-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.css']
})
export class Overview1Component implements OnInit {
  private index = 0;
  public offers: Offer[];

  constructor() { }

  ngOnInit() {
    this.offers = [];
    for (let i = 0; i < 8; i++){
      this.addRandomOffer();
    }
  }

  private randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  public addRandomOffer(){
    this.offers.push(new Offer(
      `This great article Offer: ${this.index++}`,
        this.randomDate(new Date(2012, 0, 1), new Date()),
      'Some description',
      AuctionStatus[this.randomInt(0, 7).toString()],
      this.randomInt(0, 10),
      this.randomInt(0, 100),
    ));
  }

}
