---
title: Understanding the CSS Box Model
description: The CSS box model determines how HTML elements are laid out on a page.  Any displayable element you can think of adheres to the box model.  For this reason the box model is a fundamental part of CSS. Understanding it will help you place HTML elements more precisely.  It will also make debugging a lot easier.
createdAt: '2020-08-14'
---

## What is it? Why is it important?

The CSS box model determines how HTML elements are laid out on a page. Any displayable element you can think of - whether it's a `p`, `div`, `input`, `body`, or `img` - they all adhere to the box model. For this reason the box model is a fundamental part of CSS. Understanding it will help you place HTML elements more precisely. It will also make debugging a lot easier, especially when the placement of your elements doesn't look right.

## What is the box model composed of?

The box model consists of four parts - content, padding, border, and margin. Manipulating these properties in your CSS will achieve different effects, so it's important to understand the difference between each of them.

![Image](/img/blog/box-model.png)

### Content

To see what manipulating each part of the box model does, we will use a very familiar element - the button. Here we have a simple button with some text inside of it. We will start by setting all of its box properties to 0.

```css
button {
    padding: 0;
    margin: 0;
    border: 0;
}
```

<html>
    <style>
        .content-only {
            background-color: #6ED88B;
            color: #000000;
            padding: 0;
            margin: 0;
            border: 0;
        }
        .layout-spacing {
            margin: 25px 0;
        }
    </style>
    <div class="layout-spacing">
        <button class="content-only">Sign Up</button>
    </div>
</html>

We remove the margin, padding, and border which leaves us with the content. This is the main part of an element. It could be text, an image, an icon, or in most cases another element. In this case the content is our button text. **Note that the content is not the button itself**. The button is actually our box.

### Padding

Now that we have our content, let's add some padding.

```css
button {
    padding: 10px 17px;
    margin: 0;
    border: 0;
}
```

<html>
    <style>
        #add-padding {
            background-color: #6ED88B;
            color: #000000;
            padding: 10px 17px;
            margin: 0;
            border: 0;
        }
    </style>
    <div class="layout-spacing">
        <button id="add-padding">Sign Up</button>
    </div>
</html>

Padding controls the space immediately around the content. It's the area **inside** of the border. Increasing the padding will not actually increase the distance between one box and another - that's what margin is for. What it will do is give more space inside of the box between the content and the border.

### Border

Right now we don't have a border, so why don't we add one?

```css
button {
    padding: 10px 17px;
    margin: 0;
    border: 2px solid forestgreen;
    border-radius: 5px;
}
```

<html>
    <style>
        #add-border {
            background-color: #6ED88B;
            color: #000000;
            padding: 10px 17px;
            margin: 0;
            border: 2px solid forestgreen;
            border-radius: 5px;
        }
    </style>
    <div class="layout-spacing">
        <button id="add-border">Sign Up</button>
    </div>
</html>

The border can be used to add extra space to the box, but it is not necessarily used that way. Padding and margin should be used to space out a box; the border is really just the outline. We do get some decorative options with the border as we can change not only the width of the border but also the color and style. By adding a border to our button we give it more definition from the area around it, which makes it stand out more. Here I also added a `border-radius: 5px` to round out the corners a little bit.

### Margin

For margin we are going to have two buttons.

<html>
    <style>
        .no-margin {
            background-color: #6ED88B;
            color: #000000;
            padding: 10px 17px;
            margin: 0;
            border: 2px solid forestgreen;
            border-radius: 5px;
        }
    </style>
    <div class="layout-spacing">
        <button class="no-margin">Sign Up</button><button class="no-margin">Cancel</button>
    </div>
</html>

These buttons are right up next to each other and it would be nice if we could space them out a little bit. For this we will increase the margin on the left and right of each button

```css
button {
    padding: 10px 17px;
    border: 2px solid forestgreen;
    border-radius: 5px;
    margin: 0 3px;
}
```

<html>
    <style>
        .add-margin {
            background-color: #6ED88B;
            color: #000000;
            padding: 10px 17px;
            margin: 0 3px;
            border: 2px solid forestgreen;
            border-radius: 5px;
        }
    </style>
    <div class="layout-spacing">
        <button class="add-margin">Sign Up</button><button class="add-margin">Cancel</button>
    </div>
</html>

By increasing the margin we have now added space on the **outside** of our box. Adding 3px to the left and right of each button means we now have 6px of space between the two buttons, **because each button is its own box**. So remember that margin controls space on the outside of the element and padding controls space on the inside.

## The Plot Thickens... What is box-sizing?

Below we have two standard div elements that each represent a card. They have been assigned the exact same height, width, padding, and border sizes.

```css
.card {
    height: 200px;
    width: 40%;
    padding: 15px;
    border: 10px solid blue;
}
```

<html>
    <style>
        .example-card {
            background-color: #fff;
            color: #252C27;
            padding: 15px;
            border-radius: 10px;
            width: 40%;
            height: 200px;
            border: 10px solid blue;
            overflow: hidden;
        }
        .example-card:first-of-type {
            box-sizing: content-box;
        }
        .example-card:last-of-type {
            box-sizing: border-box;
        }
    </style>
    <div style="display: flex; justify-content: space-around;" class="layout-spacing">
        <div class="example-card">
            <h3>Card Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incclassidunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.</p>
        </div>
        <div class="example-card">
            <h3>Card Header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Nullam eget felis eget nunc lobortis mattis aliquam faucibus.</p>
        </div> 
    </div>   
</html>

As you can see, despite having the same height of `200px`, the same padding of `15px`, and the same border size of `10px`, these cards are obviously not the same height. The difference is that they have different `box-sizing` properties.

```css
.card:first-of-type {
    box-sizing: content-box;
}

.card:last-of-type {
    box-sizing: border-box;
}
```

Box-sizing changes the way that the width and height of a box are calculated. By default, CSS applies the `content-box` property to elements. So what does `content-box` actually do? `Content-box` applies the specified height and width values to **only** the content of an element. This means that the height of 200px we are giving our card applies only to the content (the header and paragraph text) and not the padding or the border. If we add in the size of the padding-top (15px), padding-bottom (15px), border-top (10px), and border-bottom (10px), the actual height of the first card would be 250px.

The second box has its box-sizing set to `border-box`, which means that the height and width values **include** the content, padding, and border. The margin is not included in this calculation. So the actual height of the second card is in fact 200px.

Box-sizing not only affects the height of the box but also the width. We have set the width of both boxes to 40% of their parent element, but we can see that the box on the left is wider than the box on the right. In the box on the left, where box-sizing is set to content-box, the content width is 40%. The border and padding are added on top of that, so the card is wider than 40%. In the right side box, where box sizing is set to border-box, the border and padding are included in the 40% width calculation. So we know that this box is taking up 40% of the parent element and no more.

Often in CSS, developers will apply the `box-sizing: border-box` property to very a high-up element like the body and let it cascade down to its children. If we don't do this, we may end up with a situation where we want to layout some elements to take up 100% of the width of a parent element. But because the border-box property is set to content-box by default, these elements end up overflowing their parent, which breaks the layout.

So that's the box model. From the inside to outside it includes content, padding, border, and margin. The `box-sizing` property controls whether padding and border are included in the size of a box. This is a concept I use all the time and any developer making layouts or trying to position elements on a webpage will need to know it. Once you learn it you will have a much easier time making your layouts do exactly what you want.
