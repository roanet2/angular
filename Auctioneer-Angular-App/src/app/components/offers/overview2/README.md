# Overview 3 Notes

For this assignment we need to implement a parent and child component and use component interaction.
We pass data in between the components using input and output decorators.

The biggest struggle here was figuring out the configuration, where to put which reference in order to get the different components to talk to each other properly.
And keeping track of which offer element is clicked.

# Data binding, {property, event, two way data} binding
So I need to review components and data-binding, specifically I need to figure out components interaction. 
And how to pass data around, from one component to the other.
How parent and child components can interact with one another.

Afterwards I need to look at services and dependency injection.
How that works. How to inject dependencies. What ever that means.

# @Input()  and @Output()
@input and @output let us share data between parent and child directives or components.

```
<parent-component>
     <child-component></child-component>
</parent-component>
```

How do we use these two things together.
Here below we can see a diagram of how we can use both input and output in order to get data passing through both ways. in and out of the child and parent component.

Not how we use 
- property binding [itm]="currentItem" for target: input from child, from source: property from parent.
- Event binding (deleteRequest)="crossOffItem($event)" for target: event from child, from source method from parent.

![input output property and event binding example](../../../../assets/images/input%20output%20property%20and%20event%20binding%20example.png)


