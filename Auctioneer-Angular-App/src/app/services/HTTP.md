# HTTP

So what is it that I need to do exactly?
I left off where I need to inject the http module into the service componenent.
This is done by importing the httpclientmodule.

So our http requests are asynchrounous. We handle asynchrounous code by using callback, promises, observables.
Angular chooses observables as it's primary way of dealing with asynchronous code.

That's why we've been subscribing to observables, using the .subscribe() method.

We import `HttpClient` & `HttpClientModule` in our `app.module.ts`.  
```typescript
import {HttpClientModule, HttpClient} from "@angular/common/http";
```

Q: Do we need to pass anything else? 
A: Yes, we need to pass it into our imports array in `app.module.ts`, that's let's us inject it into our components.

Next we need to import `HttpClientModule` in our typescript service component, this let's us inject the httpclient in to it.
```typescript  
import {HttpClientModule} from "@angular/common/http";
```

Afterwards we can pass it into the constructor of our service component to use it.


So I managed to setup the httpModules, but I still need to find a way to authenticate myself.
How do I do that?
Where do I need to specify that?





