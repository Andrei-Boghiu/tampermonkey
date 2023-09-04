  // ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  try {
      const interVal = setInterval(() => {
      const searchInput = $("input#search");

      if (searchInput) {
          clearInterval(interVal)

          searchInput.trigger('focus');
          searchInput.val("hello there traveler")

          searchInput.trigger('change');
          setTimeout(() => {
              searchInput.trigger('blur');
          }, 100)

      }
  }, 200)
  } catch(error) {
      alert(error)
  }


})();
