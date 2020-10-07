---
title: Reduce Lines of Code with JavaScript's Reduce Function
description: JavaScript Reduce
createdAt: '2020-10-07'
---

JavaScript arrays have tons of functions that allow you to manipulate them. You can flatten them, map them, push, pop, and sort them. To be honest, I still don't know exactly what some of these methods do. Recently I finally learned about `reduce()`, which is a method I have been aware of for a long time but never quite understood. It turns out it's pretty useful, and when I figured it out I immediately refactored a couple of functions in one of my projects to use it.

## <a href="#when-can-you-use-reduce">When can you use reduce?</a>

Reduce, simply put, iterates over an array and returns one value. So if you have a scenario where the following are true, chances are it would be wise to consider reduce.

-   You need to loop over an array
-   You only need to return one value

This leaves us with a lot of possibilities. A few examples would be getting the sum of all values in an array, finding the highest number in an array, concatenating strings in an array, or filtering an array. Remember, all of these examples return **one value**.

## <a href="#using-reduce">Using Reduce</a>

Alright, so we know when to use `reduce()`, now the question is _how_?

```javascript
let users = [
    { name: 'Jerry', age: 37 },
    { name: 'Mike', age: 24 },
    { name: 'Angela', age: 20 },
]

const compareAges = function(oldestAgeSoFar, currentUser) {
    if (currentUser.age >= oldestAgeSoFar) {
        return currentUser.age
    }

    return oldestAgeSoFar
}

const getHighestAge = function() {
    return users.reduce(compareAges, 0)
}

getHighestAge()
// expected output: 37
```
