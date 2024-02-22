# Parent: Overview3 -> CHild: Detail3

The main lesson that we are trying to learn here is how to seperate the data out of the component. 
Right now we are mostly using an array within the component itself to pass to the template.
But components should be used for the view, and manipulating the view.

We can seperate out the data and pass it to the component using services.
We defined a new service: `/app/services/offers.service.ts`

In there we defined an offers array, and some CRUD methods, and a method to add offers to the array
We still need to figure out how to use this service to pass data into this component.

We do this first of all by passing a offerService reference to the constructor of this component.
Don't forget to import your offerservice.


```typescript
import {OffersService} from "./offers.service"; import {OnInit} from "@angular/core"; 

export class overviewComponent implements OnInit{
    
    // this will give us a reference to work with: this.offerService
    constructor(private offerService: OffersService){}
    
    //Here we can define another method. getOffers which will call this.offerService.add
}
    
```

So we need to note that in the typescript file. we can reach the reference to the service that is passed through the constructor only inside of methods.
And we can reach them inside of template statements.




## Observable and using RxJS
So this is reactive programming. where we use functional design patterns to handle our data.

We could potentially use the observable pattern to get our work done. 
But I think we will be learning this later. For now we will keep it simple.
In this same component define the we use `this.offerService.getOffers.subscribe()` to 'subscribe' to the offers array in the service.

```typescript
import {observable} from "rxjs"; 
import {OnInit} from "@angular/core"; 
import {OffersService} from "./offers.service";

  //So this is what we would do if we used the observable pattern.
export class overViewComponent implements OnInit {
    
   constructor(private offerService: OffersService){}

  
    ngOnInit() {
    // So in here we call our own getOffers, which will subscribe to the offerService.
    this.offerService.getOffers();
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe(offers => this.offers = offers);
  }
 }
```
  
