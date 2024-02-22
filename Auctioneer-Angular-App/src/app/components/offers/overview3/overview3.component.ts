import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../../services/offers.service';

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css']
})
export class Overview3Component implements OnInit {

  private clickedIndex = -1;
  private stateNoDeltaDetail = true;

  constructor(private offerService: OffersService) {
  }

  ngOnInit() {
  }

  private addAndDisplayRandomOffer() {
    if (this.stateNoDeltaDetail) {
      this.offerService.addRandomOffer();
      const n = this.offerService.getLength() - 1;
      this.displayOffer(n);
    } else {
      window.alert('Unsaved changes in detailOverview');
    }
  }

  private displayOffer(indx: number) {
    if (this.stateNoDeltaDetail) {
      this.stateNoDeltaDetail = true;
      this.clickedIndex = indx;
      console.log(`clickedIndex: ${this.clickedIndex} offer: ${this.offerService.get(this.clickedIndex).title}`);
    } else {
      window.alert('Unsaved changes in detailOverview');
    }
  }

}
