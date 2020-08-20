---
title: Easy Cache Busting with Laravel Mix
description: Web browsers cache files downloaded for websites to optimize performance. This is great for using the web but it means updated files may be blocked from reaching users. We can use Laravel Mix to easily bust the cache and force the browser to download the most current versions of our assets.
---

Recently I ran into a troubling issue with a project I have in production. After I pushed some updates to the site's CSS files, I visited the url to make sure everything still looked ok. I noticed that even though the HTML was properly updated with my new code, my CSS styles were still outdated.

How could this be? Alarmed, I opened the devtools to see if any of the changes I made were showing up in the code. They were not. It was the same CSS that existed before. What did I do wrong? The code on the production server was up-to-date. The resources had been re-compiled properly. Was I missing something?

As a matter of fact, I was. When I visited my website, assets from the site had already been stored by the browser because I had visited the site before. Instead of grabbing the new, updated assets, my browser simply reused the ones that it already had. This is called caching, and it is an important browser behavior for optimizing performance. But it means that when developers make updates, they need to "bust" the cache of users who access their site.

## What is caching and why do browsers do it?

Browsers store previously fetched resources (like CSS and JavaScript files) so they don't have to be retrieved every time a user visits a site or navigates to a different page within the site. This is great because it means webpages load faster and are more responsive. It also saves data because assets don't have to be re-downloaded every time a user visits a site or navigates to a page within the site.

For web developers though, it means we have to do one extra thing and make sure the browser knows that it needs to replace the outdated cached resources with new ones.

## Laravel Mix and Cache Busting

If you use Laravel Mix, this is really easy. You can add cache busting by putting the following code in your `webpack.mix.js` file.

```
if (mix.inProduction()) {
    mix.version();
}
```

This will add a unique hash to the filenames of all compiled files. In my case I am compliling all of my CSS into one file called `all.css`. In production right now this file is named `all.css?id=080b79eaaae172eb5bf8` and the next time I update the CSS and run `npm run production` on my server it will change to something else.

One important thing to remember is that if you are using Mix cache busting, you need to use Laravel's global mix function to link to your assets. So in my case instead of linking to my css file like this:

```
<link rel="stylesheet" href="/css/all.css">
```

It has to be changed to this:

```
<link rel="stylesheet" href="{{ mix('/css/all.css') }}">
```

The reason is because Mix appends a random string to the end of the file name, you won't be able to know the precise name of the file you are trying to link to, which means the file will not load.

Mix makes it really easy for busting cache and takes care of most of the work for us. We just have to remember to do this if we want our most current updates to reach our users. Without it they could possibly be stuck on outdated site resources for months.
