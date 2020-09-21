---
title: Tips For Writing Better "If" Statements
description: ''
createdAt: '2020-09-16'
---

"If" statements are programming 101. We don't get very far without them. They help us check the state of our software and then do something based on the result. **If** our state is equal to _this_, do _this_, **else** do _something different_.

```javascript
if (someCondition === true) {
    // do this
} else {
    // do something different
}
```

But "if" statements can get out of hand sometimes. Imagine having to read something like this and figure out what it's supposed to be doing.

```javascript
if (
    someCountVariable ||
    someCountVariable < someArray.length ||
    (someCountVariable !== someArray.length && parseInt(someOtherVariable > 0))
) {
    if (someOtherVariable >= 365) {
        // do this
    } else if (someOtherVariable < 365) {
        // do this instead
    }
} else {
    // do something else
}
```

You would have to use a significant amount of time and brainpower to figure out what is going on here. Even though this would be working code, it's really hard to read and understand. Other developers who didn't write this code would have a difficult time with it. Even someone who wrote this code and had to read it again a few weeks later wouldn't understand it right away.

Most of the time we don't mean to write "if" statements like this. But when things get complicated it just sort of happens, especially if we don't know what we can do to make it better. So I am going to offer some tips to improve complicated "if" statements to make them easier to read and understand. These tips will help you write cleaner, more readable "if" statements that will be easier to understand and leave you with less bugs in your applications.

## <a href="#avoid-nested-if-statements" id="avoid-nested-if-statements">Avoid Nested If Statements</a>

Nested if statements are sometimes necessary but they add extra lines and indentations to our code. Consider the following example where we have a function for checking if a pizza is vegetarian. First we are checking to see if the pizza has any toppings, then we are checking to see if those toppings include sausage. We are performing these checks separately, in two different steps, nested inside of each other.

```javascript
const isVegetarian = function(pizza) {
    if (pizza.toppings.length > 0) {
        if (pizza.toppings.includes('sausage')) {
            return false
        }
    }

    return true
}
```

We can make this cleaner by adding both conditions to the parent "if" statement and adding `&&` in between them. Now we have reduced the number of lines of code inside our function from seven to five. We also don't have to try to hold the meaning of the first if statement in our brain while we are reading the second one.

```javascript
const isVegetarian = function(pizza) {
    if (pizza.toppings.length > 0 && pizza.toppings.includes('sausage')) {
        return false
    }

    return true
}
```

This makes it much easier to read this function, understand what it's doing, and move on.

## <a href="#avoid-using-else" id="avoid-using-else">Avoid Using Else</a>

Just because we can use "else" with our "if" statement, that doesn't mean it's always necessary. Many times just an "if" with no "else" will do.

In the following example, we are calculating the cost of the toppings on the pizza. If the customer adds more than two toppings, we charge 50 cents for each topping. If the customer does not add more than two toppings, we don't charge for toppings.

```javascript
let toppingsCost

if (pizza.toppings.length > 2) {
    toppingsCost = pizza.toppings.length * 0.5
} else {
    toppingsCost = 0
}
```

This is fine but we can make it better because the else part is completely unnecessary. Instead of declaring the `toppingsCost` variable and assigning it to a variable inside the if statement, let's go ahead and assign it to 0.

```javascript
let toppingsCost = 0

if (pizza.toppings.length > 2) {
    toppingsCost = pizza.toppings.length * 0.5
}
```

This code does the exact same thing without using the `else` statement. The `toppingsCost` variable is set to 0 and it remains 0 unless the amount of toppings is more than two. Only if the amount of toppings is greater than 2 is the `toppingsCost` variable changed.

## <a href="#think-positive" id="think-positive">Think Positive</a>

It's much easier to understand the sentence "This is the right way to the beach" than "This isn't the wrong way to the beach." Both sentences say pretty much the same thing but the first is more direct and clear in its meaning. Writing if statements is very similar. You can ask if something is true, you can also ask if something is the reverse of true.

The bang operator (`!`) allows us to take whatever condition we are looking for in our if statement and reverse it. It can be very convenient to throw a bang in there, but it can be confusing as well. In the following example we are trying to determine if a pizza order has no sides. Try reading the if statement outloud.

```javascript
const hasNoSides = function(order) {
    if (order.drinks.length !== 0 || order.breadsticks.length !== 0) {
        return false
    }

    return true
}
```

We have a lot of negatives in this whole function. We are checking for _no_ sides. We are then looking to see if the lengths are _not equal_; and if one of these conditions are true, we return _false_.

It's pretty confusing and since we are flipping the logic constantly it makes it difficult to be sure that the code is actually doing what it is supposed to do.

```javascript
const hasSides = function(order) {
    if (order.drinks.length > 0 || order.breadsticks.length > 0) {
        return true
    }
}
```

We can clear this up by first changing the name of the function to `hasSides`. We are also going to return `true` if the condition is met. So when this function is called we can easily understand its meaning.

```javascript
if (hasSides(order)) {
    // this order has sides
}
```

Next, in our "if" statement, we look for a positive result by checking if the number of drinks and breadsticks is greater than 0. This means that when the "if" statement is true, the result of the function is true, giving the whole function a more consistent meaning.

## <a href="#extract-a-complicated-conditional-into-its-own-function" id="extract-a-complicated-conditional-into-its-own-function">Extract a Complicated Conditional Into Its Own Function</a>

Sometimes we can get into writing some pretty complicated conditional logic in our "if" statement. In this example we are checking to see if an order meets our Monday Special criteria.

```javascript
if (
    order.pizzas.length <= 2 &&
    order.drinks.length <= 2 &&
    order.breadsticks.length <= 1 &&
    user.coupon.code === 'MONDAYSPECIAL'
) {
    // this order is for the monday special
}
```

To make this more readable, we can make a new function called `isMondaySpecial`. Then we can copy the conditional and paste it into our function, which will return true if the order meets the criteria. Now in our "if" statement we can call `isMondaySpecial` and know exactly what it is checking because of the descriptive function name. `isMondaySpecial` can also be reused in other parts of our application.

```javascript
const isMondaySpecial = function(order) {
    return (
        order.pizzas.length <= 2 &&
        order.drinks.length <= 2 &&
        order.breadsticks.length <= 1 &&
        user.coupon.code === 'MONDAYSPECIAL'
    )
}

if (isMondaySpecial(order)) {
    // this order is for the monday special
}
```

If we were to come back and read this code later we would know exactly what it is doing without having to read all of the code, because the name of the function tells us.

Writing better "if" statements is a great way to clean up your code and produce better, easier to understand logic. They make it easier for anyone reading your code and reduce the likelihood of bugs. Take the time to write good "if" statements and in the long-run you'll be happy that you did.
