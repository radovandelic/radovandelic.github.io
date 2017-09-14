This application automatically writes the specifications for all the objects in your .js file.

All you need to do is add descriptions/purposes for your properties in the source code using **/\*d:** and  **:d\*/**   tags **before your colons** like so:

```javascript
var house = {
    size: 150 /*d:  it defines the size:d*/,
    windows: 5 /*d: describes the number of windows :d*/,
    floors: 2 /*d: number of floors :d*/,
    description: "you live here" /*d: it describes :d*/
};
```

And then open your .js file using through index.html.

__To do:__

*add support for functions

*objects within objects