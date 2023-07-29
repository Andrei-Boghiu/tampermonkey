function simulateClick(element) {
  const eventOptions = {
    bubbles: true,
    cancelable: true,
    view: window,
  };

  // Dispatch mousedown event
  const mousedownEvent = new MouseEvent("mousedown", eventOptions);
  element.dispatchEvent(mousedownEvent);

  // Dispatch mouseup event
  const mouseupEvent = new MouseEvent("mouseup", eventOptions);
  element.dispatchEvent(mouseupEvent);

  // Dispatch click event
  const clickEvent = new MouseEvent("click", eventOptions);
  element.dispatchEvent(clickEvent);
}
