---
title: 'How To Install Vue 3 Into An Existing Project Using Laravel Mix'
description: This is a guide for installing Vue 3 into an existing project using Laravel Mix. Note that this does not have to be a Laravel project, as Mix can compile your frontend assets for any web project. This guide may be helpful for you if you want use Vue 3 but do not have the opportunity to scaffold out a new project.
createdAt: '2021-06-23'
tags: ['javascript', 'vue', 'laravel', 'laravel mix']
---

With the release of Vue 3 last year, many of us are eager to start working with the framework but scenarios vary when it comes to getting started. In my own case, I wanted to install Vue 3 into an existing Laravel project. To keep it close to the Laravel toolset, I chose to use Laravel Mix to compile Vue for this project. Ultimately, the Vue 3 installation was a success and I am happily building new features with it in this project, but the process of getting it working was a bit frustrating. It was difficult to find guides that accurately accounted for this use-case. For this reason I wanted to write a blog post in case others find themselves dealing with this. You might find this post helpful if you are trying to install Vue into an existing project and you are using Laravel Mix as your compiler.

Note that this method does not require you to be working with a Laravel project in order to work. Laravel Mix will compile your frontend assets for any web project, so even if you are using a different framework or no framework at all, this guide may be for you.

## Step 1: Install Laravel Mix

The first thing we need to do is install our compiler. Laravel Mix is a webpack wrapper that makes it easy to compile our JavaScript and CSS code with a simple configuration file. In this case Mix is going to compile our Vue components into an app.js which will be linked to our index.html file.

To install Mix run this command:

```bash
npm install laravel-mix --save-dev
```

This will install Mix and create a node_modules folder and package-lock.json file if you don't have them already.

In order to setup Mix to compile our assets, we need a configuration file. Create a file in your project's root directory named `webpack.mix.js`. You can do this by running the following command in your terminal:

```bash
touch webpack.mix.js
```

In this file put the following code:

```javascript
let mix = require('laravel-mix')

mix.js('src/app.js', 'public/js')
```

The parameters passed into the `mix.js()` function indicate the location where you will be writing javascript and the location where it will compile to. So if you would like to specify different file locations then remember that the second parameter is the path where the compiled javascript file will be created.

Next, we should test Mix to make sure it's working so far. Create a src directory in your project root and inside that directory create an `app.js` file (if you specified a different path in webpack.mix.js then place your app.js file there). Inside `app.js` put the following code:

```javascript
alert('hello world')
```

Now run the following command to tell Mix to compile your `app.js` file.

```bash
npx mix
```

Everything should compile with no errors and in your project's `public/js` directory you will now have a generated `app.js` file.

Before we test our javascript in the browser we need to link to the compiled file in our `index.html` by adding the following line of code right before the closing `body` tag.

```html
  <script src="public/js/app.js"></script>
</body>
```

Now load the page in your web browser and you should see the "hello world" alert pop up. If this happens, everything is working so far.

## Step 2: Install Vue 3

Install Vue 3 with the following command:

```bash
npm install vue@next
```

Once Vue is installed, we need to tell Mix to compile it for us. It's very simple, you only need to add `.vue()` to your `mix.js()` command.

```javascript
mix.js('src/app.js', 'public/js').vue()
```

Now let's create an example component that we can use to test Vue to make sure it's working. In the src directory, create a folder called "components". Inside that directory, create `ExampleComponent.vue`. This file should look like this:

```javascript
<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data() {
	return {
	  message: 'This is an example component',
	}
  },
}
</script>
```

Next, we have to go back to `app.js` to import Vue along with our example component. In your `app.js` file, remove the alert and add the following code:

```javascript
import { createApp } from 'vue'
import ExampleComponent from './components/ExampleComponent.vue'

const app = createApp({
  components: {
    ExampleComponent,
  },
})

app.mount('#app')
```

What's going here? We are importing Vue, adding our example component to it, and then mounting Vue to an element that is on our web page. But for this to work, that element needs to exist, so we need to go back to `index.html`. Add the id "app" to the html element where you want Vue to take effect. Usually this is a parent element for the entire application.

Also, add the example component to the page. The following code should now be included in your `index.html` file.

```html
<body>
  <!-- Vue will be mounted here -->
  <div id="#app">
    <example-component></example-component>
  </div>
  <script src="public/js/app.js"></script>
</body>
```

Now you can run `npx mix` to compile everything again and refresh the page in your browser. You should see the message from `ExampleComponent.vue`. If you see this, congrats, everything is working!

A few more things that will help you get going. First, you should be able to run `npx mix watch` to watch your javascript files for changes. This will keep you from having to run npx mix every time you change a file. Also, if you don't have them already, you will want to install the Vue devtools. You can install these as extensions in Chrome and Firefox. For Vue 3, as of the time of writing this, you need to install the beta version of the Vue devtools in order for them to work. Hope this helps, and enjoy working with Vue 3!
