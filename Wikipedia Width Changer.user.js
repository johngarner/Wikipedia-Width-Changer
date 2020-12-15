// ==UserScript==
// @name         Wikipedia Width Changer
// @namespace    https://garner.io
// @author       John Garner
// @version      1.1
// @description  A simple user script that constrains Wikipedia articles to 40em in width.
// @icon         https://en.wikipedia.org/static/favicon/wikipedia.ico
// @run-at       document-start
// @grant        none
// @include      *://*.wikipedia.org/*
// @exclude      *://*.wikipedia.org/w/*
// @exclude      *://*.wikipedia.org/wiki/Main_Page*
// @exclude      *://*.wikipedia.org/wiki/Talk*
// @exclude      *://*.wikipedia.org/wiki/Special*
// @exclude      *://*.wikipedia.org/wiki/Wikipedia*
// @exclude      *://*.wikipedia.org/wiki/Help*
// @exclude      *://*.wikipedia.org/wiki/Portal*
// ==/UserScript==

document.getElementById("content").style.maxWidth = '40em';
document.getElementById("content").style.margin = 'auto';
