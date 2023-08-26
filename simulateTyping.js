    function simulateTyping(element, text) {
    const inputEvent = new Event('input', { bubbles: true });
    element.value = "";
    for (let char of text) {
        element.value += char;
        element.dispatchEvent(inputEvent);
        //console.log(char)
    }
}
