---
title: Rethinking Const
description: For a long time I have defaulted to using const to declare variables, but now that I know more about the const keyword I am starting to think this is not such a good idea.
createdAt: '2021-02-26'
tags: ['javascript']
---

Lately I have been rethinking how I declare variables in my JavaScript code. For a while my process has been to default to using `const` for variable declarations unless I know that the value of the variable is going to change. It seemed like the the safest option because it would be more strict than `let` against changing values. If I realized that I needed the value to change later then it would show an error and I could declare the variable with `let`. If I did not need the value to change and it did then an error would let me know. But now that I understand `const` better I am rethinking my process. The problem with `const` in JavaScript is that it has exceptions - some types of variables are allowed to change. This is confusing and it makes the intent of using `const` less clear. Given JavaScript's messy rules, I am starting to use `const` much less, defaulting to `let` for most of my variable declarations.

### <a href="#a-brief-explanation-of-const" id="a-brief-explanation-of-const">A Brief Explanation of Const</a>

In JavaScript, variables can be declared using three keywords - `var`, `let`, and `const`. The `const` keyword means two things - this variable will be scoped within this block (a topic for another blog post) and this variable cannot be _reassigned_. Note that I said _reassigned_ and not _changed_, an important distinction.

```javascript
const num = 3

num = 4 // This causes an error
```

This is the kind of behavior we would expect from `const`, right? We declare a constant, which should not change, and when we try to change it later on we get an error.

However, if we try to do the same thing with an object it gets a little muddier.

```javascript
const user = {
  id: 45,
  name: 'Cliff',
}

user.id = 10
user.name = 'Mary'

console.log(user) // { id: 10, name: 'Mary' }
```

JavaScript lets us change the properties of the object even though we declared it with const. It also lets us add additional properties to the object without throwing an error. We can completely modify the object - adding, removing, and changing properties - and we would not receive any warnings or errors by doing so.

The same is true for arrays:

```javascript
const arr = [1, 2, 3, 4]

arr.push(5)

console.log(arr) // [1, 2, 3, 4, 5]
```

So what's the difference between using `const` and `let` for objects and arrays? Well, here is what `const` _does_ give us: The value cannot be reassigned to another value. This would throw an error:

```javascript
const arr = [1, 2, 3]

arr = [4, 5, 6] // throws an error
```

With this in mind, is it really a good idea to declare object and array variables using `const`? Because the meaning behind the keyword is that _this is a value that is not going to change_, even if that is not the behavior in terms of this particular programming language. Developers who know JavaScript well should know this, but it still doesn't mean that we won't get tripped up by it from time to time. Variable declarations should be _intentional_, and not come with caveats.

### <a href="#when-to-use-const" id="when-to-use-const">When To Use Const</a>

Going forward, my mindset toward const is to use it much, much less. In fact, a `const` declaration will be an intentional statement directed toward a programmer reading the code as much as it is for the computer executing the code. It will state that the value is not supposed to change. When I'm not sure, I'm just going to go with `let`.

It is possible to prevent values assigned to variables from changing. For primitive types, this is easy because they cannot be modified after they are assigned using a `const` keyword. For objects and arrays, we have to take one extra step.

#### <a href="#object-freeze" id="object-freeze">Object.freeze()</a>

It is possible to "freeze" objects and arrays so that they do not change. We know `const` doesn't do it for us, but JavaScript does provide a method that will prevent the properties of objects from being changed. It also prevents properties from being added and removed. This method is called `Object.freeze()`.

```javascript
const user = Object.freeze({
  id: 55,
  name: 'Andre',
})

user.name = 'Jessica' // Will not throw an error

// The original user did not change
console.log(user) // { id: 55, name: 'Andre' }
```

This also works for arrays since arrays in JavaScript are technically objects.

With this in mind, it's important that we as developers know what we're doing when we use `const`. We don't necessarily make a value immutable when using this keyword. If our intent is not to 100% prevent a value from changing then we should use `let` instead. If we _do_ want that then we have to make sure that the value assigned is a primitive type or we wrap it in `Object.freeze()`. Otherwise we could cause unnecessary confusion or bugs in our software later.
