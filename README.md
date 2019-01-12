# js-complete-guide

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
