import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from "rxjs";

// I don't understand this.
export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : window.confirm('Discard Change?').valueOf();
  }

}
