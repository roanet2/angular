import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {AuctionStatus, Offer} from '../../../models/offer';
import {OffersService} from '../../../services/offers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail4',
  templateUrl: './detail4.component.html',
  styleUrls: ['./detail4.component.css']
})

export class Detail4Component implements OnInit, OnDestroy {

  @ViewChild('detailOfferTitle', {static: true}) offerTitle: ElementRef;
  @ViewChild('detailOfferDescription', {static: true}) offerDescription: ElementRef;
  @ViewChild('detailOfferStatus', {static: true}) offerStatus: ElementRef;
  @ViewChild('detailOfferNumberOfBids', {static: true}) offerNumberBids: ElementRef;
  @ViewChild('detailOfferValuesHighestBid', {static: true}) offerHighestBid: ElementRef;
  @Output() stateNoDeltaChange = new EventEmitter<boolean>();
  @Output() detailOfferIndexChange = new EventEmitter<number>();
  private auctionKeys: string[] = Object.keys(AuctionStatus).filter((type) => isNaN(type as any));
  private queryParamsSubscription: Subscription;

  constructor(private offerService: OffersService, private router: Router, private activatedRoute: ActivatedRoute) {
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
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(`Detail Setup id: ${params.id}`);
      this.detailOfferIndex = params.id || -1;
    });

  }

  ngOnDestroy() {
    // In the assignment the following is writted down:
    // this.queryParamsSubscription && this.queryParamsSubscription.unsubscribe();
    // But I don't understand what the first statement, before the && are supposed to do.

    this.queryParamsSubscription.unsubscribe();
  }

  letParentKnow() {
    console.log('Called from child!!');
  }

  // This seems like the more elegant way of changing this boolean. Instead of doing it in the parent.
  changeState() {
    this.stateNoDelta = !this.stateNoDelta;
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

    console.log(`
        Logging: nativeElementsSssssSSSS:
        ${this.offerTitle.nativeElement.value}
        ${this.offerService.get(this.detailOfferIndex).sellDate}
        ${this.offerDescription.nativeElement.value}
        ${this.offerStatus.nativeElement.value}
        ${this.offerNumberBids.nativeElement.value}
        ${this.offerHighestBid.nativeElement.value}
    `);

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

  getStatus() {
    return this.stateNoDelta ? '😊👍' : '😪👎';
  }

  getId() {
    return this.activatedRoute.snapshot.queryParamMap.get('id');
  }

}
