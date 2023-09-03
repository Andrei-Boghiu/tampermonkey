// Select the existing button and textarea
const existingBtn = document.querySelector("button#no");
const textarea = document.querySelector("textarea");

// Create a new button
const newBtn = document.createElement("button");
newBtn.textContent = "New Button"; // Set the button text as an example

// Flag to prevent overwriting the text
let preventOverwrite = false;

// Add a click event listener to the new button
newBtn.addEventListener("click", () => {
    if (!preventOverwrite) {
        textarea.focus();
        textarea.value = "special_item"; // Set the comment directly
        textarea.dispatchEvent(new Event("input", { bubbles: true })); // Trigger the input event
        preventOverwrite = true;
    }
    existingBtn.click();
});

// Add an input event listener to the textarea to reset the flag
textarea.addEventListener("input", () => {
    preventOverwrite = false;
});

// Append the new button to the same parent as the existing button
existingBtn.parentElement.appendChild(newBtn);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Select the existing button and textarea
const existingBtn = document.querySelector("button#no");
const textarea = document.querySelector("textarea");

// Create a new button
const newBtn = document.createElement("button");
newBtn.textContent = "New Button"; // Set the button text as an example

// Add a click event listener to the new button
newBtn.addEventListener("click", () => {
    textarea.focus();
    textarea.value = "special_item"; // Set the comment directly
    textarea.dispatchEvent(new Event("input", { bubbles: true, cancelable: true, })); // Trigger the input event
    textarea.dispatchEvent(new Event("change", { bubbles: true })); // Trigger a change event
    existingBtn.click();
});

// Append the new button to the same parent as the existing button
existingBtn.parentElement.appendChild(newBtn);
