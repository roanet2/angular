import {Component, OnInit} from '@angular/core';
import {Offers11Service} from "../../../service2/offer11.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-overview11',
  templateUrl: './overview11.component.html',
  styleUrls: ['./overview11.component.css']
})
export class Overview11Component implements OnInit {

  private parentReferenceToChild;
  private stateNoDelta = true;

  constructor(
    private offerService: Offers11Service,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log(`Pausing so offerService can finish retrieving data.`);
    }, 2500);

  }

  onSave(){
    this.offerService.saveAllOffers()
  }

  onGet(){
    this.offerService.getAllOffers()
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
