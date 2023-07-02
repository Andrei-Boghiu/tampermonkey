// ==UserScript==
// @name         Draggable Mini Dashboard
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a dashboard on the page that you can drag it.
// @author       TheShadow1408 from Fiverr (https://www.fiverr.com/theshadow1408)
// @match        https://www.fiverr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nasa.gov
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @grant        GM_info
// @run-at       document-end
// ==/UserScript==

(async function () {
  "use strict";

  // set an interval to check if all the dependencies are loaded
  const interVal = setInterval(() => {
    // dependencies (here you should have as dependencies all the elements you want to use in your script)
    const body = document.querySelector("body");

    // if all the dependencies are loaded, clear the interval
    if (body) {
      clearInterval(interVal);

      // Function to make the dashboard header draggable
      function makeDraggable(element) {
        var header = element.querySelector("#dashboard-header"); // Select the header element
        var body = element.querySelector("#dashboard-body"); // Select the body element
        var footer = element.querySelector("#dashboard-footer"); // Select the footer element

        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

        header.addEventListener("mousedown", dragMouseDown);

        function dragMouseDown(e) {
          e = e || window.event;
          e.preventDefault();
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.addEventListener("mouseup", closeDragElement);
          document.addEventListener("mousemove", elementDrag);
        }

        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          element.style.top = element.offsetTop - pos2 + "px";
          element.style.left = element.offsetLeft - pos1 + "px";

          // Adjust the position of the body and footer elements
          body.style.top = body.offsetTop - pos2 + "px";
          footer.style.top = footer.offsetTop - pos2 + "px";
        }

        function closeDragElement() {
          document.removeEventListener("mouseup", closeDragElement);
          document.removeEventListener("mousemove", elementDrag);
        }
      }

      // Create the dashboard innerHTML
      const dashboardHtml = `
              <!-- Dashboard Header -->

              <div id="dashboard-header">
                  <h5>Dashboard</h5>
                  <button class="close-settings" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
              </div>

              <!-- Dashboard Body -->
              <div id="dashboard-body">
                  <!-- Buttons -->
                  <div id="buttons">
                  <button id="start">Start</button>
                  <button id="stop">Stop</button>
                  <button id="reset">Reset</button>
                  </div>
                  <!-- Checkboxes -->
                  <div id="checkboxes">
                  <label for="one">
                      <input type="checkbox" name="" id="one" />
                      <span> One </span>
                  </label>
                  <label for="two">
                      <input type="checkbox" name="" id="two" />
                      <span> Two </span>
                  </label>
                  <label for="three">
                      <input type="checkbox" name="" id="three" />
                      <span> Three </span>
                  </label>
                  </div>
                  <!-- Options -->
                  <div id="options">
                  <label for="select">
                      <select name="Select" id="select">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      </select>
                  </label>
                  <label for="range">
                      <input type="range" name="" id="range" />
                  </label>
                  </div>
              </div>

              <!-- Dashboard Footer -->
              <div id="dashboard-footer">
                  <span
                  >*Made by
                  <a href="https://www.fiverr.com/theshadow1408" target="_blank"
                      >TheShadow1408</a
                  ></span
                  >
              </div>
          `;
      const dashboardStyle = `

          #dashboard {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 300px;
              height: auto;
              background-color: #333;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
              z-index: 9999;
              display: block;
              color: #ffffff;
          }

          #dashboard-header {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              margin: 10px;
              color: #ffffff;
          }

          #dashboard-header h5 {
              color: #ffffff;
          }

          #dashboard-header button {
              cursor: pointer;
              background-color: transparent;
              border: none;
              outline: none;
              font-size: 35px;
              color: #ff0000;
          }

          #dashboard-body {
              background-color: #222;
              padding: 20px;
              color: #ffffff;
          }

          #buttons {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 30px;
              padding: 10px;
          }

          #buttons button {
              margin-right: 10px;
              border-radius: 20px;
              font-size: 14px;
              padding: 10px 16px;
              color: #ffffff;
              background-color: #1077d8;
              border: none;
              outline: none;
              cursor: pointer;
          }

          #checkboxes label {
              display: block;
              margin-bottom: 10px;
              font-size: 14px;
              color: #ffffff;
          }

          #checkboxes input[type="checkbox"] {
              margin-right: 10px;
          }

          #options label {
              display: block;
              margin-bottom: 10px;
              font-size: 14px;
              color: #ffffff;
          }

          #options select,
          #options input[type="range"] {
              width: 100%;
              padding: 5px;
              border-radius: 4px;
          }

          #dashboard-footer {
              margin: 10px;
              color: #ffffff;
              font-size: 12px;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
          }

          #dashboard-footer a {
              color: #ffffff;
              text-decoration: none;
          }

          #dashboard-footer a:hover {
              text-decoration: underline;
          }

          `;

      // Create the dashboard
      const dashboard = document.createElement("div");
      dashboard.id = "dashboard";
      //   dashboard.style.position = "fixed";
      //   dashboard.style.top = "50%";
      //   dashboard.style.left = "50%";
      //   dashboard.style.transform = "translate(-50%, -50%)";
      //   dashboard.style.zIndex = "9999";
      //   dashboard.style.width = "300px";
      //   dashboard.style.height = "400px";
      //   dashboard.style.borderRadius = "10px";
      //   dashboard.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      //   dashboard.style.background = "#222";
      //   dashboard.style.color = "#fff";
      //   dashboard.style.display = "block";

      dashboard.innerHTML = `<style>${dashboardStyle}</style>${dashboardHtml}`;

      // Configure the dashboard
      body.appendChild(dashboard);
      makeDraggable(dashboard);

      // Add CSS styles for the modal and button
    }
  }, 500); // set 500ms interval to keep low resource usage
})();
