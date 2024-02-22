import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../../services/offers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-overview41',
  templateUrl: './overview41.component.html',
  styleUrls: ['./overview41.component.css']
})
export class Overview41Component implements OnInit {
  constructor(
    private offerService: OffersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  private addAndDisplayRandomOffer() {
    this.offerService.addRandomOffer();
    const n = this.offerService.getLength() - 1;
    this.displayOffer(n);
  }

  private displayOffer(indx: number) {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
      queryParams: {id: indx}
    });
  }

  getId() {
    return this.activatedRoute.snapshot.queryParamMap.get('id');
  }

}
