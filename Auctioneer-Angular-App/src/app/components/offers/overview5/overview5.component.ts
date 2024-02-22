import {Component, OnInit} from '@angular/core';
import {OffersService} from '../../../services/offers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-overview5',
  templateUrl: './overview5.component.html',
  styleUrls: ['./overview5.component.css']
})
export class Overview5Component implements OnInit {

  constructor(
    private offerService: OffersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  getId() {
    return this.activatedRoute.snapshot.queryParamMap.get('id');
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

}
