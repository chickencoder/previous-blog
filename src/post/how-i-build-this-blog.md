---
layout: layouts/post
tags: post
title: How I Built This Blog
date: 2020-04-21
---

In my [last post](/post/why-this-blog-isnt-using-react), I went on a rather unnecessary rant describing my early frustrations with trying to create a blog. I had originally intended on including some of these thoughts in that first post but once I finished ranting about React, I figured it was probably time to sign off.

This post is all about the technical foundations of this very blog that you are so kindly reading.

## Eleventy

As I alluded to at the end of my previous post, I opted for [Eleventy](https://11ty.dev) to build my site. Or is it _11ty?_

> Eleventy is a simpler static site generator.

Source: [11ty.dev](https://11ty.dev)

Eleventy is a [static-site generator](https://www.staticgen.com/). Essentially, it is responsible for compiling of all my static files (like markdown, images etc.) into a lovely little folder full of HTML that can be deployed to the web. Eleventy also has a wealth of plugins which make adding site features, such as an RSS feed, a joyous experience.

Eleventy is written in Node which makes it an obvious choice for me.
Its powerful data layer and well written documentation make the development process straight forward and fun.

Writing a blog is probably what Eleventy is used for most meaning that there is a surplus of useful content online.

For me, a fun side effect of using Eleventy is writing HTML templates using one of the built in templating languages, such as [Nunjucks](https://mozilla.github.io/nunjucks/) which is so refreshing as appose to writing JSX.

## TailwindCSS

Controlling the look and feel of my site is important to me. I want a to be able to create something that feels like it expresses a tiny bit of personality and colour. For the past year or two, I've been using [TailwindCSS](https://tailwindcss.com).

TailwindCSS is my by far my favourite tool listed in this post.

Tailwind is a utility-first library for building responsive UIs quickly and in a maintainable way.

Tailwind essentially provides a design system through a bunch of utility classes, which incredibly powerful. For outlookers, writing your 99% of your styles in the `class` attribute of your HTML elements (or in your JSX), seems really ugly.

Tailwind classes look like `bg-blue-500` for setting a blue background colour, `p-4` for setting the padding of an element and `flex items-center justify-center` for using flex to horizontally and vertically align a div (what a super power!).

My argument is, unless you try it an experience the control and power it gives you, you will never understand.

Just like Eleventy, TailwindCSS has a bunch of plugins that make it a well rounded solution. I'm using the [Tailwind CSS Dark Mode]() plugin, to provide a dark theme. This works by adding a 'dark modifier' to classes.

For example...

```html
<div class="bg-white dark:bg-gray-900">
  ...
</div>
```

## Netlify

One of the last major components to building a blog is finding a place to host it. [Netlify](https://netlify.com) is **much more** than just a place to host a website.

I've been using Netlify for nearly 3 years now and no other platform for deploying web projects has come close to beating it.

Last year I was fortunate enough to be sent to [JAMStack Conf](https://jamstackconf.com) in London. It was incredible to hear from some of the people who are building such a creative and useful platform. I also collected a whole bunch of stickers and merch that day, so for as long as I wear my Netlify socks, I will be a keen Netlify customer!

Here's a list of quick wins that Netlify gives you...

- Instant TLS/SSL certificate &mdash; _for free_
- Netlify DNS &mdash; quickly manage domains
- GitHub Integration &mdash; fast, automatic deployment

And [so much more](https://www.netlify.com/products/)...

## In Closing...

I've missed out a bunch of brilliant tools that also power this website but the few tools I have mentioned are testament to a new and exciting era of web development.

Maybe this era will be defined by [JAMStack](https://jamstack.com) or perhaps the _serverless_ movement.

I'm not sure yet. But I do know that it's an exciting time to be building things for the web!
