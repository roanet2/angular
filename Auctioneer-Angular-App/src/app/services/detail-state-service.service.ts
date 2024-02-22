import {Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailStateServiceService {

  // stateNoChange = true;

  // @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  // toggle() {
  //   this.stateNoChange = !this.stateNoChange;
  //   this.change.emit(this.stateNoChange);
  // }
}
