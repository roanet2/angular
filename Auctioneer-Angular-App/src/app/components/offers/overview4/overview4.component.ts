import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../../services/offers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit {

  private parentReferenceToChild;
  private stateNoDelta = true;

  constructor(
    private offerService: OffersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  callDeactivate(componentReference) {
    console.log('Calling deactivate from OverView4.ts');
  }

  callActivate(componentReference) {
    console.log(componentReference);
    componentReference.letParentKnow();
    this.parentReferenceToChild = componentReference;
    componentReference.stateNoDeltaChange.subscribe((data) => {
      this.stateNoDelta = data;
    });
  }

  getId() {
    return this.activatedRoute.snapshot.queryParamMap.get('id');
  }

  private addAndDisplayRandomOffer() {
    this.offerService.addRandomOffer();
    const n = this.offerService.getLength() - 1;
    this.displayOffer(n);
  }

  // TODO refactor this, this hella ugly.
  private displayOffer(indx: number) {
    if (!this.stateNoDelta) {
      if (window.confirm('Discard Changes?').valueOf()) {
        this.router.navigate(['edit'], {
          relativeTo: this.activatedRoute,
          queryParams: {id: indx}
        });
        // Can't believe this actualy worked.
        // this.parentReferenceToChild.stateNoDelta = !this.parentReferenceToChild.stateNoDelta;
        this.parentReferenceToChild.changeState();
      }
    } else {
      this.router.navigate(['edit'], {
        relativeTo: this.activatedRoute,
        queryParams: {id: indx}
      });
    }
  }

}
