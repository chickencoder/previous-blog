---
layout: layouts/post
tags: post
title: Why This Blog Isn't Using React
date: 2020-04-20
---

I've been trying to build a simple blog for the past few months. Just somewhere to publish my thoughts and experiences.

[React](https://reactjs.org) is my go-to tool for building pretty much any web project these days so I thought it would make sense to pick up React to build a simple blog.

I'm not sure if it's just because I've been suffering a little bit of [JavaScript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4) lately, but I couldn't for the life of me build a blog the way I wanted to using my favourite React tools.

If you're building a React blog, you really have 3 options. You could use [Next](https://nextjs.org), [Gatsby](https://gatsbyjs.org) or build your own build process that probably involves solving static pre-rendering (for SEO purposes). Considering I wanted something quick and simple, a homebrewed solution was off the table.

## Gatsby is Great

I think most React developers would suggest that building a blog is what Gatsby was _made for_. I've used Gatsby a little in the past and I think it's great. Gatsby is really powerful. It has an extensive array of plugins and modules meaning most common website features can be added with a simple `npm install`.

My problem with Gatsby is that there are only 2 ways to get started. The first would be to use the `gatsby new` command and pick up someone else's website and then make it your own. Perhaps I'm just lazy but in my experience, even the simplest gatsby starter projects require a lot of editing before you can actually make it your own and start writing content.

The other way to create a new gatsby project is to start from scratch. Gatsby's power comes from it's insane level of configuration and extensibility. Unfortuately for me, lots of configuration is exactly what I don't want (remember all I want is a simple blog).

No doubt in a larger project, Gatsby would shine.

I'm also excited to be hearing about [Gatsby Recipes](https://www.gatsbyjs.org/docs/recipes/), which _may_ solve my configuration phobia.

## Next is Neat

If you're like me and a large amount of boilerplate configuration scares you then Next is the perfect antidote. Next takes a convention-over-configuration approach. Sparing the details, Next's design principles seem to be based around simplicity. The bare minimum Next project looks like a running `npm install -D react react-dom next`
and writing a single `pages/index.js` file that exports a React component.

Despite the simplicity of Next's API, as a framework, Next provides developers with most of the fundemental tools for building scalable and performant web applications.

In Next's recent 9.3 release, it was announced that Next would have new capabilities for static pre-rendering (rendering HTML at build time). To me, this seemed the perfect time to opt for Next as my framework of choice to build my blog.

Long story short, I tried and got fed up. Next is brilliant at keeping things simple. However, this meant that if I wanted to perhaps index my blog posts, so that I can list them out on my homepage, I would have to write some code to scan through the filesystem looking for the right kinds of files. I couldn't be bothered. Because of Next's serverless focus, reading the filesystem becomes unnecessarily treacherous.

## Conclusion

At this stage I realised that I was trying to use React for all the wrong reasons.

React is awesome, but it was never meant to build simple blogs.

Retrospectively, I should've opted for something a bit more fitting to begin with. But here's why I _think_ I didn't...

After building in React for a while, my brain saw everything as a component. Thinking about building something in anything other than React was a scary thing to do. How will I structure my layout? How will I define my typography? How will I eliminate 100% code redundancy with abstractions, components & hooks?

There's more to life than React.

In the end, I opted for [11ty](https://11ty.dev). But I'll make a separate post about that.
