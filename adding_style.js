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
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 16px;
            font-weight: 600;
            transition: background-color 0.3s ease, color 0.3s ease;
            background-color: #4CAF50;
            color: #ffffff;
            box-shadow: 0px 4px 8px rgba(76, 175, 80, 0.2);
            }
        .tampermonkey-div:hover {
            background-color: #45a049;
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
