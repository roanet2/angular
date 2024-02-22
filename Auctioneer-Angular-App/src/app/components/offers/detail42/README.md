# FormsModule


forms are importante corner stone to webapps. 
There are two main methods of handling forms. 
Which are reactive forms and template driven forms.

Have we worked with forms before?
We have but what kind of interface did we implement when we used forms?

So I see that datamodel is one of the forms in here that is part of the forms module.
We've used that before. 

We have `FormControl` which is used for individual form elements.
`FormGroup` which is a collection of formcontrol
`formarray` which is a list of formcontrol elements.
Last but not least you have the `ControlValueAccessor` creates a bridge between `FormControl` elements and `DOM` elements.

So Reactive forms are defined by `import {fromcontrol} from @angular/forms`

we use it by initialize it by `favoriteColoControl = new FormControl('');` in the script file.
We use it by passing it as an attribute in an `input template element`: `<input type="text" [formControl]="favoriteColorControl"`
Note how the naming convention. de overeenkomst tussen de namen.


So we've done template driven forms before using `[(ngModel)]="favoriteColor"`. 
I'll not dwell too much on this, since we've already passed this a long time ago.



We van use a form tag to create our form group within that tag.
```html
<form #myVariableName="ngForm" novalidate>
<!--Why is he using fieldset here?-->
    <fieldset>
    <div class="form-group">
        <label for="">LastName</label>
        <input type="text" class="form-control">
    </div>
    </fieldset>
</form>
```


So I need to use the NgForm module. 

I can specify it in the form tag. By passing a pound sign, the name that I want to give it, and then the ngForm attribute.
This will give you access to the other elements in the `formgroup`. Thus in your script component. 
You can create a method, pass it the reference of the component, and be able to access the attributes.

> To register child controls with the form, use NgModel with a name attribute. You may use NgModelGroup to create sub-groups within the form.

So I can use the BananaBoxModel, But I can also use ngModel by itself, and using the pound sign notation with variable name and pass ngModel as the attribute to that.
Giving access to that particular form element.










