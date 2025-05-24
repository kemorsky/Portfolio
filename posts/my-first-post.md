---
title: 'Hello, is this on?'
date: '2025-05-22'
tags: ['Launch', 'New Feature']
---
 
Today I'm adding the blog section of my portfolio. Although originally a part of the launch I decided to postpone it in the end in favor of a better, slightly more challenging implementation.

But first things first. Let's talk about the thought process and technical decisions made to bring this project to life.

**Setting Up**
==============

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.
 
- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.
 
Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.