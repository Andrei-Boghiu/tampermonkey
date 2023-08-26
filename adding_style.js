// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// ==/UserScript==

// Tampermonkey script
(function() {
    // Define your CSS styles using GM_addStyle
    const customStyles = `
        .tampermonkey-div {
            background-color: lightblue;
            padding: 10px;
            color: white;
        }
    `;

    // Apply the styles using GM_addStyle
    GM_addStyle(customStyles);

    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Hello, Tampermonkey!';

    // Add a CSS class to the new div
    newDiv.classList.add('tampermonkey-div');

    // Append the new div to the body of the page
    document.body.appendChild(newDiv);
})();
