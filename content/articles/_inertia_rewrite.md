---
title: Upgrading a Laravel App to Inertia.js
description: Inertia.js is described as the "glue" between your frontend and backend framework.  After I learned about how it could help me write a SPA with Laravel and Vue while avoiding a lot of the SPA complexity, I decided to convert one of my apps to Inertia.
createdAt: '2021-10-14'
tags: ['inertia.js', 'laravel', 'vue']
---

Recently I decided to take on the task of upgrading my <a href="https://flowbilltracking.com" target="_blank" rel="noreferrer">Flow Bill Tracking</a> project to a SPA (single-page-application) using <a href="https://inertiajs.com" target="_blank" rel="noreferrer">Inertia.js</a>. I had for a long time dreamed of turning the project into a SPA to gain the benefits of a faster site and the full power of a frontend framework. But the added complexity for building and maintaining a SPA always made me too hesitant.

A few months ago, Inertia.js gained my attention after I read about it in Jeffrey Way's blog post <a href="https://laracasts.com/blog/the-best-of-both-worlds" target="_blank" rel="noreferrer">The Best of Both Worlds</a>. In this post, Jeffrey describes Inertia.js as the "glue" that connects the server-side framework to the client-side framework. Inertia allows you to write a SPA using React, Svelte, or Vue while keeping your code for routing, auth, and state management all within a backend framework such as Laravel or Rails. Since Jeffrey decided to rewrite his site, Laracasts, with Inertia, it seemed like it might be legit.

I decided that I would give it a shot and I started converting Flow to Inertia. After finishing the rewrite, I can say I'm pretty happy with the result. I would do it all over again if I had to. So in this post I am going to describe why I chose to rewrite Flow in Inertia, what it was like converting it, and share my takeaways that I learned after the rewrite was done.

## <a href="#flow-before-inertia" id="flow-before-inertia">Flow Before Inertia</a>

I built Flow as a pretty standard Laravel application. It is mostly small and simple, with the majority of the templating in Blade with a few Vue components sprinkled in for more compicated UI's such as a calendar or a multi-component interface. Obviously it was not a SPA, so visiting each new page meant a full refresh and downloading the entire document from the server. For what it was it was fine, and I was overall pleased with it; but sometimes I was limited with what I was able to do on pages that only used Blade.

## <a href="#why-inertia" id="why-inertia">Why Inertia?</a>

I've always wanted to make Flow a SPA but with all of the extra work it would take I deemed it out of the scope of the project. Even so, I'm a big fan of Vue and I enjoy writing JavaScript. I knew that leveraging the power of Vue would allow more possibilities for my UI's. I also like the speed and responsiveness of SPA's.

Inertia took the possiblity of a SPA and pulled it into the scope of my project. If it was really possible to write my frontend in Vue, but let Laravel still control all of my auth, state, and routing, then using Inertia seemed ideal.

What I discovered from the rewrite is that when I write a Laravel application using Inertia it still has the _feel_ of writing a Laravel app. I will go into more detail later, but features such as flashing messages to the session, error bags, and Ignition error pages are still possible with Inertia. This is why Jeffrey Way calls it "the best of both worlds". And with all this you still get a performant SPA.

#### <a href="#authentication" id="authentication">Authentication</a>

One of the biggest drawbacks to building a SPA is token-based authentication. As a longtime Laravel developer, I have always been used to using what was provided for me and it just worked. But token authentication is a lot more complicated because you have to generate a token for a user, pass it to your frontend, store it client-side, and pass it back on every request. And you also have to validate the token (both on the frontend and backend), deal with the token expiring, redirect if the token is invalid, etc. It's just a headache to have to deal with when you really want to focus on building features of your app.

Inertia allows you to continue using Laravel's authentication service that just works from the start. You don't need to configure Sanctum, issue tokens, or write client-side middleware for handling tokens. It works the same way as traditional Laravel authentication that you're probably used to where after your first day of installing and configuring the project, you really don't need to think about it much anymore.

#### <a href="#state-management" id="state-management">State Management</a>

Another frustration of building SPA's is client-side state management. Not only do you need to keep the application's state on the server-side in a database, but you also have to maintain that data manually using a store that's usually provided by your frontend framework (such as Vuex or Redux). Since you don't have the benefit of getting a full refresh every time the user visits a new page, more has to be done to make sure that the state of the client matches the state of the server.

Once again, Inertia eliminates the need for client-side state management by automatically fetching the data from the server when the user visits a new page. Rather than sending the full html document, the server sends the data as a json response and that data is passed in as props to the components. This happens every time a user navigates to a new page, so it is similar to refreshing the application's state each time, except without having to fully refresh the whole page.

#### <a href="#passing-data-to-components" id="passing-data-to-components">Passing Data to Components</a>

Another tricky problem with building SPA's is having to fetch data from the server to use in your components. On the server-side you have to write an API for handling those requests and sending that data back to the client. On the client-side you have to write the fetch requests that will request the data and then assign it to variables or handle errors.

Inertia makes it easy to pass data from Laravel into your components. It works the same way as it does when you are passing data to a Blade view. Just use a `->with()` in your controller function when returning a response and the data inside will be passed to your component as a prop. Because these are props, you may still have to register the prop in your component depending on how that works in your frontend framework.

#### <a href="#the-power-of-frontend-frameworks" id="the-power-of-frontend-frameworkds">The Power of Frontend Frameworks</a>

The biggest difference between a standard Laravel application and one with Inertia is that Blade is essentially replaced by the frontend framework you choose. Inertia has adapters for React, Vue, and Svelte. And while Blade is great, it just doesn't have the capabilities of these JavaScript frameworks. Inertia allows you to utilize the power of a modern frontend framework for building better UI's with great features such as data binding, scoped CSS, events, and more.

## <a href="#the-rewrite" id="the-rewrite">The Rewrite</a>

#### <a href="#package-updating" id="package-updating">Package Updating</a>

As is usually the case with JavaScript, the most difficult part was sorting out the packages and getting them all to play nicely together. Since I was installing Inertia into an existing project it wasn't quite as simple as running a few commands listed in the docs. This was also an upgrade from Vue 2 to Vue 3 so I had to completely uninstall Vue first so there wouldn't be a conflict between the versions. I also needed to upgrade Laravel Mix from version 5 to 6 so that I could compile Vue 3.

Additionally, Inertia requires you to be running at least php 7.3. I ran into an issue when deploying my rewrite where my server had php 7.4, but nginx and php-fpm were running on php 7.2, which was causing the application to fail. This is just another thing to keep in mind when you need to run your app.

#### <a href="#blade-views-to-vue-components" id="blade-views-to-vue-components">Blade Views to Vue Components</a>

Most of the work rewriting Flow was converting Blade views to Vue components. This was pretty tedious but it was offset by the obvious improvements I was able to make to each page. If I could find any quick and easy changes to improve the app then I did that right away, and those were pretty fun. For instance, I was able to delete a few small js files I wrote for showing alerts and confirm dialogs. Since the pages were now in Vue, it was much easier to setup that interactivity, and those plain js files were no longer necessary.

Another benefit of using Vue was that I could move a lot of my css styling from css files to Vue components. I wrote the styles for Flow using plain css so adding Vue allowed me to move those styles into components where I could view them easier, right with the templates that were using them.

One other change I was able to make by using Vue was to move code for formatting values out of Laravel models and into Vue components. For instance, I had a couple of methods like this in one of my models. I was using these methods in Blade to print formatted date and currency values.

```php
public function formattedAmount()
{
	return number_format($this->attributes['amount'] / 100, 2);
}

public function formattedDate()
{
	$carbonDate = new Carbon($this->attributes['date']);

	return $carbonDate->format('m/d/Y');
}
```

I was able to delete these and move the logic for formatting these values into the components that were actually rendering them. This made more sense to me because that logic was placed closer to the html where the formatting was actually happening.

#### <a href="#responses" id="responses">Responses</a>

Another part of the app that needed modification was the responses. This wasn't much work since it mainly consisted of slightly changing the systax. Here is an example of what a response looked like before and after converting it to Inertia:

```php
// before inertia
return view('categories.edit')->with(['category' => $category]);

// with inertia
return Inertia::render('categories/EditCategory')->with(['category' => $category]);
```

For redirects and for returning back to the same page the request came from I didn't need to change anything.

#### <a href="#fewer-api-requests" id="fewer-api-requests">Fewer API Requests</a>

In my Vue components that my application was using before Inertia I had written some axios http requests to get the data needed to display in the component. I was able to delete these as well as API routes and controller methods on the backend. Since Inertia allows me to use `->with()` to pass data to the component directly, those http requests were no longer needed. It also meant that the component could load with the data ready rather than flashing the component with empty data for an instant and then filling it a few milliseconds later.

#### <a href="#tests" id="tests">Tests</a>

I also want to mention the importance of having tests for this rewrite. From the start of writing Flow I have written end-to-end test suites using Cypress. Having those tests made me much more confident in rewriting this app without breaking a lot of things. Without those tests I would have had to spend much more time making sure everything worked and I would have undoubtedly missed some things and deployed a more buggy app. It was so nice being able to run my tests, fix anything that wasn't working correctly, and move on feeling confident that things were still working.

## <a href="#takeaways" id="takeaways">Takeaways</a>

#### <a href="#feels-like-writing-a-laravel-app" id="feels-like-writing-a-laravel-app">Feels Like Writing a Laravel App</a>

My favorite part about writing an application using Inertia is that it gives me a SPA but I still feel like I am writing a Laravel app. I can still <a href="https://inertiajs.com/shared-data#flash-messages" target="_blank" rel="noreferrer">flash</a> messages to the session and then show them conditionally in my Vue components. I can still see the Ignition debug page in my browser when an error occurs. I can still use `dd()` to look at variables and the results are displayed on the browser page. I don't need to search my browser's devtools for this information and have to view it in a way that is not the most helpful. These are just a few Laravel features that are still available. They seem small but having them makes the experience of app-building much nicer.

#### <a href="#the-form-helper" id="the-form-helper">The Form Helper</a>

Inertia also provides a form helper that takes a lot of the work out of submitting forms. Using this helper means you don't have to write a function on the client side for sending a post request. You can just intercept the submit event and call a method provided by Inertia.

```html
<form @submit.prevent="form.post(`/accounts/${accountId}/bills`)"></form>
```

What's great about this form helper is it also works really well with Laravel's validation errors. So if form validation fails you will be able to access the errors and display the error messages automatically. It feels not very different from writing forms using Laravel and Blade. A lot of the work is taken care of for you so you can set these forms up quickly and move on to build other things.

At the end of the day, I'm pretty happy that I decided to go with Inertia. My app now has the speed of a SPA with the simplicity that I always envisioned for it.

I invite you to check out <a href="https://www.flowbilltracking.com" target="_blank" rel="noreferrer">Flow</a> to see the end result (you can log in with the email johndoe@example.com and the password password111). Also the Inertia developers have provided a <a href="https://demo.inertiajs.com/login" target="_blank" rel="noreferrer">demo app</a> for anyone who wants to experience what a site built in Inertia feels like.
