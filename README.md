# CSS-CLASS
0.0.1
Just create a simple css class with javascript

- [X] Support all elements type [div, a, pre ...]
- [X] Class
- [X] Hover

Example:
--------------------------------------
```js
var myClass = new css({
    background: "Red",
    transition: "1s ease"
});

myClass.hover({
    background: "Yellow"
});

myClass.add(document.body);
```

Usage:
--------------------------------------
```js
var myClass = new css(json); //Create a class (base)
myClass.hover(json); //When the mouse hover the block
myClass(element); //Add the class to an element like body
```
