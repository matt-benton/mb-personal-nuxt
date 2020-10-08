---
title: Reduce Lines of Code with JavaScript's Reduce Function
description: JavaScript arrays have tons of functions that allow you to manipulate them. You can flatten them, map them, push, pop, and sort them. To be honest, I still don't know exactly what some of these methods do. Recently I learned about reduce, which is a method I have been aware of for a long time but never quite understood. It turns out it's pretty useful, so in this post I'm going to share with you what reduce does, when to use it, and how it can improve your code.
createdAt: '2020-10-07'
---

JavaScript arrays have tons of functions that allow you to manipulate them. You can flatten them, map them, push, pop, and sort them. To be honest, I still don't know exactly what some of these methods do. Recently I learned about `reduce`, which is a method I have been aware of for a long time but never quite understood. It turns out it's pretty useful, so in this post I'm going to share with you what reduce does, when to use it, and how it can improve your code.

## <a href="#when-can-you-use-reduce">When can you use reduce?</a>

Reduce, simply put, iterates over an array and returns a value. So if you have a scenario where you need to do both of those things, chances are it would be worth considering reduce. A few examples would be getting the sum of all values in an array, finding the highest number in an array, concatenating strings in an array, or finding a particular element in an array.

## <a href="#using-reduce">Using Reduce</a>

Reduce takes two arguments. The first argument is a callback function. The callback function will be executed on each element of the array. It takes four arguments, but we are only going to talk about the first two, which are required. The first argument is an **accumulator**, or basically, the value that has been returned from the previous loop. If you are using `reduce` to get the sum of an array, this argument would be the sum of all values already looped over. The second argument is the **current element** in the array.

The second argument of `reduce` is the **initial value**. This argument is optional. When passed into `reduce`, it sets the starting value for the accumulator. If nothing is passed as this argument, `reduce` will use the first element in the array as the starting value.

Here is an example of using reduce to find the oldest person in a group of users. First we have an array of objects that represent users.

```javascript
let users = [
    { name: 'Jerry', age: 37 },
    { name: 'Mike', age: 24 },
    { name: 'Angela', age: 20 },
]
```

Next we are going to define a callback function. We will call this function `compareAges`. The accumulator argument is called `oldestAgeSoFar` and the current element argument is called `currentUser`. Inside the function we compare the the `oldestAgeSoFar` with the `currentUser`'s age, then we return the number that is highest.

```javascript
const compareAges = function(oldestAgeSoFar, currentUser) {
    if (currentUser.age >= oldestAgeSoFar) {
        return currentUser.age
    }

    return oldestAgeSoFar
}
```

Now when we call reduce on `users` and pass `compareAges` in as the callback, it returns `37`; which is the highest age of all our users. We also need to pass in `0` as the initial value. If we don't, the accumulator in the first iteration will be a user object rather than the age integer value we need for our comparison.

```javascript
users.reduce(compareAges, 0)
// returns 37
```

I broke this down into parts to make it easier to understand but you can easily do this with less code. Just write the callback function directly into `reduce` as an arrow function and use a ternary operator to compare values.

```javascript
users.reduce(
    (oldestAgeSoFar, currentUser) =>
        currentUser.age >= oldestAgeSoFar ? currentUser.age : oldestAgeSoFar,
    0,
)
```

## <a href="a-real-world-example">A Real World Example</a>

After I learned what `reduce` could do I thought about how I could use it in a project I was actively working on. It didn't take very long for me to find something.

In my <a href="https://www.flowbilltracking.com">Flow Bill Tracking</a> web app, I have an array of bills, which are objects. These bills each have a property called `amount`. In a component I am calculating the sum of all the bills. This is the code that calculates the sum of all bills:

```javascript
sumOfBills(bills) {
    let total = 0

    bills.forEach(bill => {
        total += bill.amount
    })

    return total
}
```

To get the sum of all bills, I am declaring a starting value of 0, looping over each bill, adding the bill's amount to the total, then returning the total. Sounds like this meets the criteria for `reduce` perfectly!

Here is that same function rewritten using `reduce`:

```javascript
sumOfBills(bills) {
    return bills.reduce((acc, bill) => acc += bill.amount, 0)
}
```

By using `reduce`, I was able to reduce (no pun intended) a seven line function down to a one line function. At the same time it is now a little bit less readable, but since the callback isn't super-complicated and the function name clearly describes what it is doing, I think this a good refactor.

The possibilities for using `reduce` seem very large and I am looking forward to finding new ways to use it in the future. It's a good little array method to have in my toolkit and I'm glad I took the time to understand it.
