# Detail3


# The proper way to do banana in a box
![input output property and event binding example_2](../../../../assets/images/input%20output%20property%20and%20event%20binding%20example_2.png)

So finally we have a god damn working banana in a fucking box custom fucking two way fucking binding.

The way to do this properly is the following.
In the child script component, we specify input and output references.


![input output property and event binding example_1](../../../../assets/images/input%20output%20property%20and%20event%20binding%20example_1.png)

# Read the fucking documentation!!!! 
# @Input() fuck <---->  @Ouput() fuckChange ====> [(fuck)]="giveAFuck"
so you have to name the goddamn fucking input variable `fuck`. And if you name the output variable `fuckChange`. 
Then the fucking banana in a fucking god damn box will work.
Other wise fuck you.

### child.component.ts
```typescript
@Input() detailOfferIndex: number;
@Output() detailOfferIndexChange = new EventEmitter<number>();

updateIndex(offerIndex;: number;){
this.detailOfferIndex = offerIndex || -1;
this.indexChange.emit(this.detailOfferIndex);
}
```

### parent.component.ts
```typescript
private number;
```

### parent.component.html
So finally we end up in the parent template, which contains the child template tag.
Where we can use our god damn banana in a box bullshit.

```html
<!--bla bla-->
<app-child [(detailOfferIndex)]="clickedIndex"> </app-child>
```

Remember the banana in a box notation is just shorthand for the following:
```html
<!--bla bla-->
<app-child [detailOfferIndex]="clickedIndex" (indexChange)="this.clickedIndex=$event"
```

Remember what `$event` is? It's the value that gets event emitted out of the child component. In this case a number
So this is how we manage to keep track of the state of this reference in two components.
There is one down side to all of this. It is applicable to us yet, and we haven't touched on that concept yet, 
but it has to do with angular life cycle hooks. In this case `ngOnChanges`. 
If we wanted to change preprocess our variable before handing it on to the next component, we aren't able to do that.
The banana in a box syntax tightly couples our references and does not give us a chance to do any changes to it before it gets passed on.

# State change
The next thing we want to figure out is how to get if the state of the view has been changed. If any value in the view has been changed. Up until now we have been using the `@ViewChild()` decorator. But you should only use `@ViewChild()` to read values from the view. It's not the proper way to modify values.

So how the fuck do we change values? Which decorator is the one that is specialized for this task?



# Debugging notes
> “Nothing in all the world is more dangerous than sincere ignorance and conscientious stupidity.” – Martin Luther King, Jr.


Do we need to specify these variables here?
I don't think so, because the whole idea of using services is that we don't
need to store data in the component.
```typescript
import {Offer} from "./offer"; 
private index = 0;
private Offer[];
```

So i'm thinking these are the only variables I need to keep track of what's
happening inside this component. So that we can pass back these variables in
the parameters of the offerService method.

So for this excersize the only variable that we will be keeping track of is the
index.
we need to use banana two way binding notation to keep track of index in both
overview and detail


This detailOfferId is used in the overview3 two way binding child template.
```typescript
This; child [(detailOfferId)] = "clickedIndex"; the; parent;

//This notation isn't working, cause you a dumb dumb who can't read.
@Input() detailOfferId;: number;
```
Maybe I should be trying a different notation, in the document it specifies that
we need to use getters and setters.

- declare the reference
- use @input decorator
- declare getter and setter for said reference.


This is the example that was found on angular.io
Do we specifically need to define getters and setters?
```typescript
private -1;

@Input()
set detailOfferId(oIdx;: number;) {
this._detailOfferId = oIdx || -1;
}

get; detailOfferId();: number; {
return this._detailOfferId;
}
```



## The parents don't need to know
This used to be the old way of doing it, but with the banana in afucking box method this is redundant
 Here it is useful to emit an event, because the parent component needs to know that
```typescript 
deleteButton(); {
if (window.confirm(`Are you sure you want to delete ${this.offerService.offers[this.detailOfferIndex].title} ?`).valueOf()) {
  this.deleteEvent.emit(this.detailOfferIndex);
}
}
```  


### What if nothing never happened?
So we tried to solve the problem of making sure the user is notified by keeping track of the input fields and comparing them with the current element in the offerservices array. Turns out that was a horrible idea.
The proper way to do this is just keep a boolean, and watch for upkey event on the input fields and change said boolean.

This is the monstrisity of code that will pop up if you try to keep comparing.

```typescript
  stateIsNotChanged(): boolean {
    const originalOffer = this.offerService.get(this.detailOfferIndex);
    const boolTitle = this.offerTitle.nativeElement.value !== originalOffer.title.toString();
    const boolDescription = this.offerDescription.nativeElement.value !== originalOffer.description.toString();
    const boolStatus = this.offerStatus.nativeElement.value !== originalOffer.auctionStatus.toString();
    const boolNumBids = this.offerNumberBids.nativeElement.value !== originalOffer.numberOfBids.toString();
    const boolHighBid = this.offerHighestBid.nativeElement.value !== originalOffer.valueHighestBid.toString();

    const returnBool = boolTitle || boolDescription || boolStatus || boolNumBids || boolHighBid;

    console.log(`
      bool: ${boolTitle} --- nativeElement: ${this.offerStatus.nativeElement.value}      === ${originalOffer.auctionStatus.toString()}
      bool: ${boolDescription}
                              nativeElement: ${this.offerDescription.nativeElement.value}
                                             ${originalOffer.description.toString()}
      bool: ${boolStatus} --- nativeElement: ${this.offerTitle.nativeElement.value}       === ${originalOffer.title.toString()}
      bool: ${boolNumBids} --- nativeElement: ${this.offerNumberBids.nativeElement.value}  === ${originalOffer.numberOfBids.toString()}
      bool: ${boolHighBid} --- nativeElement: ${this.offerHighestBid.nativeElement.value}  === ${originalOffer.valueHighestBid.toString()}
      return value: ${!returnBool}
     `);

    //Emit the boolean to parent.
    this.noStateChangeEvent.emit(!returnBool);
    return !returnBool;
  }```
