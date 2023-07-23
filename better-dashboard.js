// ==UserScript==
// @name         Draggable Dashboard
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Adds a dashboard on the page that you can drag it around.
// @author       TheShadow1408 from Fiverr (https://www.fiverr.com/theshadow1408)
// @match        http://127.0.0.1:5500/index.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nasa.gov
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_getResourceText
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_setClipboard
// @run-at       document-end
// ==/UserScript==

(async function () {
  "use strict";

  // set an interval to check if all the dependencies are loaded
  const interVal = setInterval(() => {
    const body = document.querySelector("body");

    if (body) {
      clearInterval(interVal);

      // Function to make the dashboard header draggable
      function makeDraggable(element) {
        var header = element.querySelector("#dashboard-header"); // Select the header element

        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;

        // Load last position from local storage
        const lastPositionX = localStorage.getItem("dashboardPositionX");
        const lastPositionY = localStorage.getItem("dashboardPositionY");

        if (lastPositionX && lastPositionY) {
          element.style.left = lastPositionX;
          element.style.top = lastPositionY;
        }

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

          // Calculate the new position
          const newPosX = element.offsetLeft - pos1;
          const newPosY = element.offsetTop - pos2;

          // Save the new position in local storage
          localStorage.setItem("dashboardPositionX", newPosX + "px");
          localStorage.setItem("dashboardPositionY", newPosY + "px");

          element.style.top = newPosY + "px";
          element.style.left = newPosX + "px";
        }

        function closeDragElement() {
          document.removeEventListener("mouseup", closeDragElement);
          document.removeEventListener("mousemove", elementDrag);
        }
      }

      // Create the dashboard innerHTML
      const dashboardHtml = `
        <!-- Dashboard  Header -->
        <div id="dashboard-header">
          <h3>WA Dashboard <a class="username" href="">(user)</a></h3>
          <button class="close">X</button>
        </div>
  
        <!-- Dashboard  Body -->
        <div id="dashboard-body">
          <div class="selection">
            <button class="process-btn one">One</button>
            <button class="process-btn two">Two</button>
            <button class="process-btn three">Three</button>
            <button class="process-btn four">Four</button>
          </div>
          <div class="quick-actions">
            <span>Exclusion</span>
            <span>HVL</span>
            <span>Inflow</span>
          </div>
          <div class="process-one process" hidden>
            <h4>Process One</h4>
            <button class="action">Press Buttons In Specific Order</button>
            <button class="action">DOM Manipulation Action</button>
            <button class="action">Reminder to check</button>
            <input type="range" name="" id="" />
          </div>
          <div class="process-two process" hidden>
            <h4>Process Two</h4>
            <button class="action">Reminder to check</button>
            <button class="action">Toggle Element</button>
            <button class="action">Action two</button>
          </div>
          <div class="process-three process" hidden>
            <h4>Process Three</h4>
            <button class="action">Action three</button>
            <button class="action">Action three</button>
            <button class="action">Action three</button>
          </div>
          <div class="process-four process" hidden>
            <h4>Process Four</h4>
            <button class="action">Action four</button>
            <button class="action">Action four</button>
            <button class="action">Action four</button>
          </div>
        </div>
        <!-- Footer -->
        <div id="dashboard-footer">
          <p>
            Created by <a href="https://www.fiverr.com/theshadow1408">Shadow</a>
          </p>
        </div>
        `;

      const dashboardStyle = `
          #dashboard {
              position: fixed;
              top: 50%;
              left: 50%;
              z-index: 9999;
              transform: translate(-50%, -50%);
              font-family: Arial, sans-serif;
              background-color: #2c2c2c86;
              color: #fff;
              width: 350px;
              height: auto;
              padding: 10px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
  
          #dashboard #dashboard-header {
              background-color: #1a1a1a;
              display: flex;
              justify-content: space-between;
              padding: 10px;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              max-height: 50px;
          }
  
          #dashboard #dashboard-header h3 {
              margin: 0;
              padding-top: 15px;
              font-weight: 800;
          }
  
          #dashboard a.username {
              font-size: smaller;
              font-weight: 100;
              text-decoration: none;
          }
  
          #dashboard button.close {
              background-color: rgba(255, 0, 0, 0);
              color: #f55;
              padding: 6px 12px;
              border: 1px solid #f55;
              border-radius: 12px;
              cursor: pointer;
              margin: 10px;
              transition: background-color 0.1s;
          }
  
          #dashboard button.close:hover {
              background-color: #f55;
              color: #fff;
          }
  
          #dashboard button.close:active {
              background-color: #b31616;
          }
  
          #dashboard #dashboard-body {
              background-color: #1f1f1f;
              margin: 0;
              padding: 0 15px 15px;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
          }
  
          #dashboard .selection {
              background-color: #1f1f1f;
              display: flex;
              justify-content: space-evenly;
              padding: 10px;
          }
  
          #dashboard .selection button {
              border: none;
              cursor: pointer;
              background-color: #444;
              padding: 16px 25px;
              color: #fff;
              font-size: 18px;
              font-weight: 600;
          }
  
          #dashboard .selection button:hover {
              background-color: #666;
          }
  
          #dashboard .quick-actions {
              background-color: #1f1f1f;
              display: flex;
              justify-content: space-evenly;
          }
  
          #dashboard .quick-actions span {
              background-color: #444;
              border-radius: 5px;
              padding: 5px;
          }
  
          #dashboard button.action {
              padding: 8px 12px;
              background-color: #444;
              color: #fff;
              border: none;
              border-radius: 5px;
              font-size: 14px;
              cursor: pointer;
              transition: background-color 0.1s;
              margin: 5px;
          }
  
          #dashboard button.action:hover {
              background-color: #616060;
          }
  
          #dashboard button.action:active {
              background-color: #3a3939;
          }
  
          #dashboard .process:not([hidden]) {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
          }
  
          #dashboard #dashboard-footer {
              display: flex;
              justify-content: space-around;
              max-height: 35px;
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

      dashboard.style.display =
        localStorage.getItem("WADashboardDisplayStatus") ?? "none";

      dashboard.innerHTML = `<style>${dashboardStyle}</style>${dashboardHtml}`;

      // Configure the dashboard
      body.appendChild(dashboard);
      makeDraggable(dashboard);

      const closeBtn = document.querySelector("#dashboard-header button.close");

      closeBtn.addEventListener("click", () => {
        localStorage.setItem("WADashboardDisplayStatus", "none");
        dashboard.setAttribute("hidden", "");
        dashboard.style.display = "none";
        console.log("hidden");
      });

      const toggleModalViewBtn = document.querySelector(".toggle");

      toggleModalViewBtn.addEventListener("click", () => {
        const displayStatus =
          dashboard.style.display === "block" ? "none" : "block";
        dashboard.style.display = displayStatus;
        localStorage.setItem("WADashboardDisplayStatus", displayStatus);
      });

      const resetPositionBtn = document.querySelector(".reset");
      resetPositionBtn.addEventListener("click", () => {
        localStorage.removeItem("dashboardPositionX");
        localStorage.removeItem("dashboardPositionY");
        dashboard.style.top = "50%";
        dashboard.style.left = "50%";
      });

      const processBtns = document.querySelectorAll(
        "#dashboard .selection button"
      );
      const processBodies = document.querySelectorAll(
        "#dashboard #dashboard-body .process"
      );

      function showProcessBody(index) {
        processBodies.forEach((body, i) => {
          body.toggleAttribute("hidden", i !== index);
        });

        localStorage.setItem("lastShownTab", index);

        setLastPressedButton(index);
      }

      processBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          showProcessBody(index);
        });
      });

      const lastShownTab = localStorage.getItem("lastShownTab");
      if (lastShownTab !== null) {
        showProcessBody(parseInt(lastShownTab));
      } else {
        showProcessBody(0);
      }

      function setLastPressedButton(index) {
        processBtns.forEach((btn, i) => {
          if (i === index) {
            btn.style.backgroundColor = "#303030";
          } else {
            btn.style.backgroundColor = "#444";
          }
        });
        localStorage.setItem("lastPressedButton", index);
      }

      // Functions for action buttons
      const actionBtn = document.querySelector("button.action");

      actionBtn.addEventListener("click", () => {
        console.log("A glass of juice");
      });
    }
  }, 500);
})();
