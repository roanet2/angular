import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuctionStatus, Offer} from '../../../models/offer';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})

export class Detail2Component implements OnInit {
  auctionKeys: string[] = Object.keys(AuctionStatus).filter((type) => isNaN(type as any));
  @Input() detailOffer: Offer;
  @Output() saveEvent = new EventEmitter<Offer>();
  @Output() deleteEvent = new EventEmitter<Offer>();
  private updatedDetailOffer: Offer;

  constructor() {
  }

  ngOnInit() {
  }

  saveButton(title: string, description: string, status: any, bids: any, highestBid: any) {
    if (window.confirm(`Are you sure you want to save ${this.detailOffer.title} ?`)) {
      this.updatedDetailOffer = new Offer(title, this.detailOffer.sellDate, description, status, bids, highestBid);
      this.saveEvent.emit(this.updatedDetailOffer);
      window.alert(`${this.detailOffer.title} has been Saved.`);
    } else {
      window.alert(`${this.detailOffer.title} Not saved!`);
    }
  }

  deleteButton() {
    if (window.confirm(`Are you sure you want to delete ${this.detailOffer.title} ?`).valueOf()) {
      this.deleteEvent.emit(this.detailOffer);
      window.alert(`${this.detailOffer.title} has been deleted.`);
    }
  }

}
