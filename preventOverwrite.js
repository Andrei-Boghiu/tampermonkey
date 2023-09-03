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

/////////////////////////////////////////////////////////////////////////////////////////



// Find the textarea element by its CSS selector
const textarea = document.querySelector('textarea');

// Check if the textarea element exists on the page
if (textarea) {
    // Trigger a focus event to give the textarea focus
    const focusEvent = new Event('focus', { bubbles: true });
    textarea.dispatchEvent(focusEvent);

    // Create an input event to simulate typing
    const inputEvent = new Event('input', { bubbles: true });

    // Simulate typing each character with a delay between keypresses
    const textToType = 'Your text here';
    const delayBetweenKeypresses = 100; // milliseconds

    async function typeText() {
        for (let i = 0; i < textToType.length; i++) {
            textarea.value += textToType[i];
            textarea.dispatchEvent(inputEvent);
            await new Promise(resolve => setTimeout(resolve, delayBetweenKeypresses));
        }
    }

    // Simulate typing text
    typeText();

    // Trigger a blur event to simulate moving focus away from the textarea
    const blurEvent = new Event('blur', { bubbles: true });
    textarea.dispatchEvent(blurEvent);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const targetElement = document.getElementById('target-element'); // Replace with the actual target element

// Triggering focus event
const focusEvent = new Event('focus', { bubbles: true });
targetElement.dispatchEvent(focusEvent);

// Triggering input event
const inputEvent = new Event('input', { bubbles: true });
targetElement.value = 'Some input text';
targetElement.dispatchEvent(inputEvent);

// Triggering blur event
const blurEvent = new Event('blur', { bubbles: true });
targetElement.dispatchEvent(blurEvent);

// Triggering change event
const changeEvent = new Event('change', { bubbles: true });
targetElement.dispatchEvent(changeEvent);

// Triggering keydown event (e.g., simulating pressing the 'Enter' key)
const keydownEvent = new KeyboardEvent('keydown', {
    key: 'Enter',
    bubbles: true,
    cancelable: true,
});
targetElement.dispatchEvent(keydownEvent);

// Triggering keypress event (e.g., simulating pressing the 'A' key)
const keypressEvent = new KeyboardEvent('keypress', {
    key: 'A',
    bubbles: true,
    cancelable: true,
});
targetElement.dispatchEvent(keypressEvent);

// Triggering keyup event (e.g., simulating releasing the 'Enter' key)
const keyupEvent = new KeyboardEvent('keyup', {
    key: 'Enter',
    bubbles: true,
    cancelable: true,
});
targetElement.dispatchEvent(keyupEvent);

// Triggering mouse click event
const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    clientX: 100, // X-coordinate of the click
    clientY: 100, // Y-coordinate of the click
});
targetElement.dispatchEvent(clickEvent);

// Triggering custom event (assuming 'custom-event' is a custom event name used on the page)
const customEvent = new Event('custom-event', { bubbles: true });
targetElement.dispatchEvent(customEvent);

