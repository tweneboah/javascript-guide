# js-complete-guide

## bind() method

1. This help us to call a function and set this keyword mannually.

## Budget App

## IIFE

1. The are the functions that invoke automatically.

2. Functions and properties in IIFE are private.

3. To nake the properties or methods public unless you define them in a return key kewyord in the form of object.

4. IIFE returns the properties and methods in an object form.

5. To make the properties and methods public, define a function inside the return function.

6. Anytime you define a function inside an IIFE, to execute the function automatically, you have to call the function inside the same IIFE.

```javascript
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    console.log(x + a);
  };
  add(90);
})();
```

### Making a function public

```javascript
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    console.log(x + a);
  };

  //making the add function a public
  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();
```

### if you want to pass one function from one module to other, then you have to pass that module to the module you want access the method

My learning journey of pure javaScript

# this keyword -> 12/01/2019

```javascript
const person = {
  firstName: "Emmanuel",
  lastNmame: "Tweneboah",
  id: 542,
  fullName: function() {
    return this.firstName + " " + this.lastNmame;
  }
};
```

The JavaScript this keyword refers to the object it belongs to.

# this in a Method

In an object method, this refers to the "owner" of the method.

In the example on the top of this page, this refers to the person object.

The person object is the owner of the fullName method.

```javascript
fullName : function() {
  return this.firstName + " " + this.lastName;
}

```

# this alone

When used alone, the owner is the Global object, so this refers to the Global object.

In a browser window the Global object is [object Window]:

# this in a Function (Default)

In a JavaScript function, the owner of the function is the default binding for this.

So, in a function, this refers to the Global object [object Window].

```javascript
function myFunction() {
  return this;
}
```

# this in event Handlers

In HTML event handlers, this refers to the HTML element that received the event:

```javascript
<button onclick="this.style.display='none'">Click to Remove Me!</button>
```

# Object Method Binding

In these examples, this is the person object (The person object is the "owner" of the function):

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  myFunction: function() {
    return this;
  }
};
```
