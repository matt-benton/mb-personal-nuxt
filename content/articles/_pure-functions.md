---
title: Pure Functions
description: ''
createdAt: '2020-11-10'
---

Have you ever had a bug in your application that was the result of a function doing too much? Was it manipulating variables outside of its scope and changing the state of the application every time it ran? I have, and it can be very frustrating. These types of bugs can be hard to find which means they take time and energy to track down.

To counter these bugs, it's a good idea to write **pure functions**. Pure functions are typically simple functions that take in some input, process it, and return a result as output. More importantly, if the input is the same, the output of a pure function will always be the same as well. These functions are small building blocks for our application and we rely on them as we structure larger, more complicated features. They help us because they don't manipulate the state of our application and they don't cause side-effects, which effectively makes our code more reliable.

Functions need to meet two qualifications in order to be pure. A pure function will:

1.  Always return the same output, given the same input
2.  Have no side-effects

Pure functions always take input as arguments, perform an operation on that input, and then return a result. It's useful to think of pure functions as machines that take supplies and produce a product - like an oven, for example. If you put a pizza in the oven and turn it on, set the temperature, and leave it in for a certain length of time, the oven will return a cooked pizza. If you increase the amount of time by leaving the pizza in for too long then the oven will return you a burned pizza. The important part is that the oven will always be consistent. The same pizza, temperature, and length of time in the oven will always produce the same result.

How about a real world example? Let's say we want to write a function that tells us if it's Friday or not.

```javascript
const isFriday = function () {
  const date = new Date()

  return date.getDay() === 5
}
```

We can now call `isFriday()` and if today is Friday then we will get `true`. If not, it returns `false`. What makes this function not pure is that we are not always going to get the same output. In fact, it very well depends on what day it is. This might not sound like much of a problem since the function is definitely doing its job, but what if we wanted to use this function in an automated test? If we wrote a test that used this function the outcome would depend on whether the day the test runs is a Friday.

So let's fix our `isFriday()` function by making it pure.

```javascript
const isFriday = function (date) {
  return date.getDay() === 5
}
```

Now instead of `isFriday()` being responsible for finding the date, it receives it as an argument. Now we can pass in any date. It doesn't have to be today; it can be last month or next year. It doesn't matter. We can also write a test for this function using any date we want. So by making this a pure function it's a lot more flexible. It can be applied to more use-cases and it can be tested as well.

The other property of pure functions is that they have no side-effects. In our pizza example, imagine if our oven not only heated the pizza but sliced it as well. In reality this would be amazing, but this means that cooking our pizza would always have a side-effect. Not only is the pizza being heated when put in the over, but it's also being sliced. Maybe we don't always want the pizza to be sliced by the oven. Maybe the oven cuts slices into triangles but we want our slices to be square. Maybe, in the midst of having to prepare a whole meal we forget that the oven slices the pizza, and we end up slicing it unintentionally by cooking it in the oven.

This is a silly example, but it is very relevant to pure functions. Functions with side-effects cause bugs which can be difficult and time-consuming to track down.

Here is an example of a function that is not pure because of a side-effect. This function adds more toppings to a pizza. It takes the pizza, which is an object, as its first argument. For its second object it takes an array of toppings which it will add to the pizza.

```javascript
const addToppings(pizza, toppings) {
    pizza.toppings.concat(toppings)
    pizzaCount++

    return pizza
}
```

This function is not pure because even though it's doing its job by adding toppings, it has a side effect of incrementing `pizzaCount`. Now if a developer calls this function to add toppings to a pizza, she will also be incrementing `pizzaCount` and she probably won't even realize it. Then the `pizzaCount` will be too high and someone will have to track down this bug and fix it.

When functions reach outside of their scope and start messing with things like global variables, or when they log things to the console, or when they show and hide pieces of the UI, this can lead to problems later on when these side-effects are happening and we have no idea what is causing them.

So if you want to improve the code you write, try to start thinking more about writing pure functions. As you write a function, ask yourself if you are creating something that is going to cause side-effects in other parts of your system. Ask if, instead of manipulating a global variable, the variable can be passed in as an argument and returned instead.
