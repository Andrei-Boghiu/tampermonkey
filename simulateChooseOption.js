function simulateChooseOption(selectElement, optionIndex) {
  selectElement.selectedIndex = optionIndex;
  selectElement.dispatchEvent(new Event("change", { bubbles: true }));
}
