import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuctionStatus, Offer} from '../../../models/offer';
import {Offers11Service} from "../../../service2/offer11.service";
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detail11',
  templateUrl: './detail11.component.html',
  styleUrls: ['./detail11.component.css']
})
export class Detail11Component implements OnInit {


  // Outputs
  @Output() stateNoDeltaChange = new EventEmitter<boolean>();
  @Output() detailOfferIndexChange = new EventEmitter<number>();
  // ViewChildren, Do I still need to do this for this assignment?
  @ViewChild('detailOfferTitle', {static: false}) private offerTitle: ElementRef;
  @ViewChild('detailOfferDescription', {static: false}) private offerDescription: ElementRef;
  @ViewChild('detailOfferStatus', {static: false}) private offerStatus: ElementRef;
  @ViewChild('detailOfferNumberOfBids', {static: false}) private offerNumberBids: ElementRef;
  @ViewChild('detailOfferValuesHighestBid', {static: false}) private offerHighestBid: ElementRef;
  // FormControl
  @ViewChild('detailForm', {static: false}) private detailForm: NgForm;
  // Script variables
  private auctionKeys: string[];
  private queryParamsSubscription: Subscription;
  private localDetailOffer: Offer;


  constructor(
    private offerService: Offers11Service,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.auctionKeys = Object.keys(AuctionStatus).filter((type) => isNaN(type as any));

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
    // Load offer object in to localNg reference.
    this.localDetailOffer = this.offerService.get(this.getId());

    // Subscribe to the id of the activatedRoute.
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

  clear(detailForm: NgForm) {
    detailForm.setValue({
      offerTitle: 'Offer: ',
      offerDescription: '',
      offerStatus: '',
      numberBids: '',
      highestBid: ''
    });
  }

  clearButton(detailForm: NgForm) {
    if (this.stateNoDelta) {
      this.clear(detailForm);
    } else if (window.confirm(`Clear?`).valueOf()) {
      this.clear(detailForm);
    }
  }

  reset(detailForm: NgForm): void {
    const originalOffer = this.offerService.get(this.detailOfferIndex);
    detailForm.setValue({
      offerTitle: originalOffer.title,
      offerDescription: originalOffer.description,
      offerStatus: originalOffer.auctionStatus.toString(),
      numberBids: originalOffer.numberOfBids,
      highestBid: originalOffer.valueHighestBid
    });
    this.markPristine(detailForm);
    this.stateNoDelta = true;
  }

  resetButton(detailForm: NgForm) {
    if (this.stateNoDelta) {
      this.reset(detailForm);
    } else if (window.confirm(`reset?`).valueOf()) {
      this.reset(detailForm);
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

  saveButton(detailForm: NgForm) {
    if (window.confirm(`Save: ${this.offerService.get(this.detailOfferIndex).title}?`)) {
      const saveOffer = new Offer(
        detailForm.value.offerTitle,
        this.offerService.get(this.detailOfferIndex).sellDate,
        detailForm.value.offerDescription,
        detailForm.value.offerStatus,
        detailForm.value.numberBids,
        detailForm.value.highestBid
      );
      this.offerService.update(this.detailOfferIndex, saveOffer);
      this.offerService.saveAllOffers();
      this.markPristine(detailForm);
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
      this.offerService.saveAllOffers();
    }
  }

  markPristine(ngForm: NgForm) {
    Object.keys(ngForm.controls).forEach((control) => {
      ngForm.controls[control].markAsPristine();
    });
  }

  getStatus(): string {
    return this.stateNoDelta ? '😊👍' : '😪👎';
  }

  getId(): number {
    const numberBase = 10;
    return parseInt(this.activatedRoute.snapshot.queryParamMap.get('id'), numberBase);
  }

}
