import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AuctionStatus, Offer} from '../../../models/offer';
import {OffersService} from '../../../services/offers.service';

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})

export class Detail3Component implements OnInit {

  auctionKeys: string[] = Object.keys(AuctionStatus).filter((type) => isNaN(type as any));

  // I still need to figure out another way of setting the values of these template references!
  @ViewChild('detailOfferTitle', {static: true}) offerTitle: ElementRef;
  @ViewChild('detailOfferDescription', {static: true}) offerDescription: ElementRef;
  @ViewChild('detailOfferStatus', {static: true}) offerStatus: ElementRef;
  @ViewChild('detailOfferNumberOfBids', {static: true}) offerNumberBids: ElementRef;
  @ViewChild('detailOfferValuesHighestBid', {static: true}) offerHighestBid: ElementRef;
  @Output() stateNoDeltaChange = new EventEmitter<boolean>();
  @Output() detailOfferIndexChange = new EventEmitter<number>();

  constructor(private offerService: OffersService) {
  }

  // tslint:disable-next-line:variable-name
  private _stateNoDelta = true;

  @Input()
  get stateNoDelta(): boolean {
    return this._stateNoDelta;
  }

  set stateNoDelta(bool: boolean) {
    this._stateNoDelta = bool;
    this.stateNoDeltaChange.emit(bool);
  }

  // tslint:disable-next-line:variable-name
  private _detailOfferIndex: number;

  @Input()
  get detailOfferIndex(): number {
    return this._detailOfferIndex;
  }

  set detailOfferIndex(oIdx: number) {
    this._detailOfferIndex = oIdx;
    this.detailOfferIndexChange.emit(this._detailOfferIndex);
  }

  ngOnInit() {
  }

  clear() {
    this.offerTitle.nativeElement.value = '';
    this.offerDescription.nativeElement.value = '';
    this.offerStatus.nativeElement.value = '';
    this.offerNumberBids.nativeElement.value = '';
    this.offerHighestBid.nativeElement.value = '';
  }

  clearButton() {
    if (this.stateNoDelta) {
      this.clear();
    } else if (window.confirm(`Clear?`).valueOf()) {
      this.clear();
    }
  }

  reset() {
    const originalOffer = this.offerService.get(this.detailOfferIndex);
    this.offerTitle.nativeElement.value = originalOffer.title;
    this.offerDescription.nativeElement.value = originalOffer.description;
    this.offerStatus.nativeElement.value = originalOffer.auctionStatus;
    this.offerNumberBids.nativeElement.value = originalOffer.numberOfBids;
    this.offerHighestBid.nativeElement.value = originalOffer.valueHighestBid;
    this.stateNoDelta = true;
  }

  resetButton() {
    if (this.stateNoDelta) {
      this.reset();
    } else if (window.confirm(`reset?`).valueOf()) {
      this.reset();
    }
  }

  cancelButton() {
    if (this.stateNoDelta) {
      this.detailOfferIndex = -1;
    } else if (window.confirm('Unsaved changes, are you sure you want to discard?').valueOf()) {
      this.detailOfferIndex = -1;
      this.stateNoDelta = true;
    }
  }

  saveButton() {
    if (window.confirm(`Save: ${this.offerService.get(this.detailOfferIndex).title}?`)) {
      const saveOffer = new Offer(
        this.offerTitle.nativeElement.value,
        this.offerService.get(this.detailOfferIndex).sellDate,
        this.offerDescription.nativeElement.value,
        this.offerStatus.nativeElement.value,
        this.offerNumberBids.nativeElement.value,
        this.offerHighestBid.nativeElement.value
      );
      this.offerService.update(this.detailOfferIndex, saveOffer);
      this.stateNoDelta = true;
    }
  }

  deleteButton() {
    if (this.stateNoDelta) {
      this.offerService.remove(this.detailOfferIndex);
      this.detailOfferIndex = -1;
    } else if (window.confirm('Unsaved changes, are you sure you want to delete?').valueOf()) {
      this.offerService.remove(this.detailOfferIndex);
      this.detailOfferIndex = -1;
    }
  }

  getStatus(){
    return this.stateNoDelta ? '👍': '👎';
  }

}
