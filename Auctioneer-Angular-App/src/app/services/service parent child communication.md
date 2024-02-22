So i'm trying to use a service to achieve communication between the parent and the child.
This is done using the following pattern:

The service is the following:

 
```typescript
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SideBarService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

}
```


So now in the detail component we need the following pattern:
```typescript
import { Component, HostBinding, OnInit } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: './app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

    // I don't understand where this hostbinding comes from... Class,where is this referenced.
  @HostBinding('class.is-open')
  isOpen = false;

  // Here we reference our service component. Which makes it accesible to this component.
  constructor(
    private sideBarService: SideBarService
  ) { }
  
  
  // When we first initialize this component we need to subscribe to the change event emmitter and pass it to the local variable.
  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
```

Do we need to specify anything in the templates?
It's not clear yet if I need to specify it in the template.
But what is clear is that I'm missing the piece where i specify it in the overview

So inthe overview I need to do the following:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    //Note that it has it's own overview
    sideBarIsOpened = false;

  // Note that when the component is done initizialing it gets assigned a new value.
  ngOnInit() {
    this.sideBarIsOpened = true;
  }

  // Note when The sidebar is toggled. it reassigns the value.
  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }
}

```


This last piece is giving me the idea that i could potentially solve this problem via another route.
That actually fucking worked.
Well not this perse but referencing the child component. and assigning it to a variable to the parent worked.

Okay so now we start working on 3.5 form validation.
It looks relatively easy. 
I need to read up on the form validation methods. And read up on http calls.

